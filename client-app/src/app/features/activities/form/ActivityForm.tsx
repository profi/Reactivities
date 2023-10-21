import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submiting : boolean;
}

export default function ActivityForm({activity : seletedActivity, closeForm, createOrEdit, submiting}:Props)
{
    const initialState = seletedActivity ?? {
        
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue:''

    }

    const[activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event : ChangeEvent<HTMLInputElement>) {

        const {name, value} = event.target;
        setActivity({...activity,[name]: value})
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete = 'off'>
                <Form.Input placeholder =  'Title' value={activity.title} name = 'title' onChange={handleInputChange}/>
                <Form.Input placeholder =  'Description' value={activity.description} name = 'Description' onChange={handleInputChange}/> 
                <Form.Input placeholder =  'Category' value={activity.category} name = 'Category' onChange={handleInputChange}/> 
                <Form.Input type="date" placeholder =  'Date' value={activity.date} name = 'date' onChange={handleInputChange}/> 
                <Form.Input placeholder =  'City' value={activity.city} name = 'city' onChange={handleInputChange}/> 
                <Form.Input placeholder =  'Venue' value={activity.venue} name = 'venue' onChange={handleInputChange}/>
                <Button loading = {submiting} floated="right" positive type="submit" content='Submit' value={activity.title} name = 'title' onChange={handleInputChange}/>
                <Button onClick={closeForm} floated="right" type="button" content='Cancel' />
            </Form>
        </Segment>
    )
}