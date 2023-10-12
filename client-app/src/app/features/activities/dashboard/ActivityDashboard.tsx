import { Grid } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/activityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities : Activity [];
    selectedActivity : Activity | undefined;
    selectActivity: (id : string) =>void
    cancelSelectedActivity: ()=> void;
    editMode : boolean;
    openForm : (id: string) =>void;
    closeForm: () => void;
    createOrEdit: (activity : Activity) => void
    deleteActivity: (id:string)  => void;
  }

export default function ActivityDashboard(props : Props) {
    return (
      <Grid>
        <Grid.Column width="10">
        <ActivityList 
        activities = {props.activities} 
        selectActivity={props.selectActivity}
        deleteActivity ={props.deleteActivity}
        />
        </Grid.Column>
        <Grid.Column width = '6'>
          {props.selectedActivity && !props.editMode &&
        <ActivityDetails 
        activity = {props.selectedActivity} 
        cancelSelectedActivity = {props.cancelSelectedActivity}
        openForm = {props.openForm}
        />}
        {props.editMode &&
        <ActivityForm closeForm={props.closeForm} activity = {props.selectedActivity} createOrEdit = {props.createOrEdit}></ActivityForm>}
        </Grid.Column>
      </Grid>
    );
}