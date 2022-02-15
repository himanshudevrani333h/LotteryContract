// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract CroudFundingFactory{

   address[] public  deployedContracts;
     
    function createContractInstance(uint minimum) public {
       address deployed =  address(new CroudFunding(minimum, msg.sender));
       deployedContracts.push((deployed));
    }

    function getDeployedContractsAddress() view public returns(address[] memory){
        return deployedContracts;
    }
}

contract CroudFunding  {
    
    struct Request {
        string description;
        uint256 value;
        address payable recipient;
        bool complete;
        uint ContributerApprovals;
    }
      
    Request[] public requests;
    mapping(address => uint) requestApproved;
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint _min, address creator) {
        manager = creator;
        minimumContribution = _min;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution,"less amount");
        approvers[msg.sender] = true;
        approversCount++;
    }

     function createRequest(string memory description, uint value, address payable recipient) public restricted {
        Request memory newRequest = Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            ContributerApprovals:0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint idx) public {

        require(approvers[msg.sender],"Not a valid contributer");
        require(requestApproved[msg.sender] != idx + 1 , "already approved");
        requestApproved[msg.sender] = idx +1;
        requests[idx].ContributerApprovals += 1;

    }

    function finalizeRequest(uint idx)  public  restricted{
       Request storage req = requests[idx];
       require(req.ContributerApprovals > approversCount / 2);
       require(!req.complete);
       req.recipient.transfer(req.value);
       req.complete = true;
    }
}
