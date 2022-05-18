// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
        const response = await fetch('/api/new-meetup');
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;   