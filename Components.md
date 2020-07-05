# Components
Components/Architecture page for Mentorme. Details are subject to change. 

## Views
Views are described as any visual representation that the user will see of any piece of information.
Think of it as the front-end aspect or the visual elements that the user will interact with.

- AgendaView: displays action items that are listed for a meeting between a mentor and mentee.
    - This component will display different action items that were created for the meeting. 
    - Resides in the client-side only.
    - Communicates with AgendaController
- ApplicationMenteeView: displays application information for a mentee to fill
    - This component will have inputs a mentee will fill out when sending an application to a mentor.
    - Resides in the client-side only.
    - Communicates with ApplicationController.
- ApplicationMentorView: displays application information sent from a mentee
    - This component will display an application sent from a mentee.
    - Resides in the client-side only.
    - Communicates with ApplicationController.
- FilterPreferencesView: displays preferences settings that can be changed
    - This component will have inputs that the user can change regarding preference information for mentees/mentors.
    - Resides in the client-side only.
    - Communicates with PreferencesController.
- EventView: displays information regarding an event
    - This component will display information regarding an event
    - Resides in the client-side only.
    - Communicates with EventController.
- EditEventView: displays user input to edit event information
    - This component will prompt the user to input information regarding an event.
    - Resides in the client-side only.
    - Communicates with EventController.
- LoadingView: displays a loading screen
    - This component will display a loading screen for user feedback on select actions.
    - Resides in the client-side only.
- MenteeMatchingView: displays potential mentors a mentee can match with
    - This component will display mentors and information regarding each mentor.
    - Resides in the client-side only.
    - Communicates with MatchingController.
- MentorMatchingView
    - This component will display mentees applications that have been sent to them.
    - Resides in the client-side only.
    - Communicates with MatchingController.
- MessageView: displays messages between different users
    - This component will display all messages between a user and their other connections.
    - Resides in the client-side only.
    - Communicates with the MessageController.  
- MessagingView: displays the messages sent between a specific user
    - This component will display all messages between two users. 
    - Resides in the client-side only.
    - Communicates with the MessageController. 
- NavigationView: displays the navigation buttons
    - This component will display the different aspects of the application a user can be directed to.
    - Resides in the client-side only.
- NewsfeedView: displays the homge page
    - This component will act as a home page, displaying stories, recent events, and posts.
    - Resides in the client-side only.
- PostView: displays a post made by a user
    - This component displays a written post whenever a user clicks on a post on their newsfeed page. 
    - Resides in the client-side only.
    - Communicates with PostController. 
- PreferenceView: displays preference choices
    - This component is composed of various preference views such as name, desired field of interest, and type of role.
    - Communicates with PreferenceController
- ProfileMentorView: displays the profile page for a mentor
    - This component displays a mentor's information such as connections, notifications, activities, and other resume information.
    - Resides in the client-side only.
- ProfileMenteeView: displays the profile page for a mentee.
    - This component displays a mentee's information, such as connections, notifications, activities, and other information.
    - Resides in the client-side only.
    - Communicates with the ProfileController.
- RecommendedView: displays recommended events for a mentee/mentor depending on their interactions with posts/events.
    - This component displays recommended events for a user, with information regarding each event.
    - Resides in the client-side only.
    - Communicates with the EventController.
- SchedulingView: displays a calendar, time, and place for matched pairs to schedule
    - This component will display a calendar, time, and geographical location the users can select 
    - Communicates with the ScheduleController
- SchedulePendingView: displays pending event meetings between mentor and mentee
    - This component will display all the meetings held between a mentor and mentee including pending events
    - Resides in the client-side only.
    - Communicates with the ScheduleController
- SettingsView: displays the user's settings
    - This component displays the user's settings and allows them to change their account information.
    - Resides in the client-side only.
    - Communicates with the FirebaseController, sending any changed settings to the database.
- SuccessfulMatchView: displays feedback for a succesful match between a mentor and mentee
    - This component displays a message and image to the user indicating that they have succesfully matched.
    - Resides in the client-side only. 
- SwitchIdentityView: displays an option for user to switch role between mentee/mentor
    - This component allows the user to switch between being a mentee or mentor role.
    - Resides in the client-side only.
    - Communicates with the SettingsController.
- WritePostView: displays input for user to fill out regarding a post
    - This component asks the user to fill out information for the post and sends it to the PostController
    - Resides in the client-side only.
    - Communicates with the PostController.

## Models
Central component that directly manages logic, data, and rules of the application.

- FireBaseController: saves and returns information pertaining to user created events
    - Communicates with SignUpController,
    - Resides on server-side
    - Note: will not develop component ourselves 

## Controllers
Accepts input from the user and gives communicates between the necessary model or view. 

- AgendaController: handles agenda information
    - Receives information regarding different action items for ameeting from AgendaView
    - Communicates with FirebaseController to store agenda items for a specific user
- ApplicationController: handles application information
    - Receives information from ApplicationMenteeView 
    - Communicates between FirebaseController and ApplicationMentorView to display
    applications from mentee to mentor
    - Communicates with FirebaseController to store applications sent from a user to a mentor
- EventController: handles event informations
    - Receives information regarding events (title, time, place) from EventView and communicates that information to NewsfeedView
    - Communicates with FirebaseController to store 
- MatchingController: handles matching interactions
    - Receives information depending on user preferences made to find best mentors for a mentee
    - Communicates with FirebaseController and MatchingView
- MessageController: handles message information
    - Receives information from user input and sends it the other user
    - Communicates with FirebaseController and MessageView
- NewsfeedController: handles newsfeed information
    - Receives information from FirebaseController and sends information to NewsfeedView
    - Communicates with FirebaseController
- PostController: handles post information
    - Receives information from WritePostView and communicates information to the PostView
    - Communicates with FirebaseController to store post information
- PreferenceController: handles preference information 
    - Recieves preference information such as name, interest, and role type.
    - Communicates with FirebaseController to store preference information. 
- ScheduleController: handles schedule information
    - Receives information from Schedule such as meetings from ScheduleView
    - Communicates with FirebaseController to store scheduled events with mentor and mentee and communicates with SchedulePendingView.
- SettingsController: handles user settings
    - Recieves changes made to settings that will take place in SettingsView
    - Communicates with FirebaseController to store changes made to settings depending on input from SettingsView
- SignUpController: creating account
    - Recieves information such as email,and password that will take place from the SignUpView
    - Communicates with FirebaseController to create new user