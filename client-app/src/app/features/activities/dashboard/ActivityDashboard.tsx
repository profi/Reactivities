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
    submiting : boolean;
  }

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectedActivity, editMode, openForm,
  closeForm, createOrEdit, deleteActivity, submiting} : Props) {
    return (
      <Grid>
        <Grid.Column width="10">
        <ActivityList 
        activities = {activities} 
        selectActivity={selectActivity}
        deleteActivity ={deleteActivity}
        submiting = {submiting}
        />
        </Grid.Column>
        <Grid.Column width = '6'>
          {selectedActivity && !editMode &&
        <ActivityDetails 
        activity = {selectedActivity} 
        cancelSelectedActivity = {cancelSelectedActivity}
        openForm = {openForm}
        />}
        {editMode &&
        <ActivityForm  
        activity={selectedActivity}
        closeForm={closeForm}
        createOrEdit={createOrEdit}
        submiting={submiting}>
          </ActivityForm>}
        </Grid.Column>
      </Grid>
    );
}