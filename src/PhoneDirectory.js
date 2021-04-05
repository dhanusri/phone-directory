import React,{Component, component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            SubscriberList:[{
                id:1,
                name:'dhanu',
                phone:'9999999999'
            },
        {
            id:2,
            name:'rudra',
            phone:'22222222'
        }]
        }
    }
    addSubscriberHandler=(newSubscriber)=>{
        let SubscriberList=this.state.SubscriberList;
        if(SubscriberList.length >0 ){
            newSubscriber.id=SubscriberList[SubscriberList.length-1].id+1;
        }
        else{
            newSubscriber.id=1;
        }
        SubscriberList.push(newSubscriber);
        this.setState({SubscriberList:SubscriberList})
        console.log("phone========="+JSON.stringify(this.state.SubscriberList));
    }
    render(){
        return(
           // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
           <ShowSubscribers SubscriberList={this.state.SubscriberList}/>
        )
    }
}
export default PhoneDirectory;