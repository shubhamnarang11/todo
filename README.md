# Todo

This is a To-Do list manager where User can add new Tasks and also mark it as Completed after completion of task.

## Prerequisites
1. Make sure you have Node.js on your local machine.
	```shell-script
	sudo apt-get install nodejs
	sudo apt-get install npm
	```

## Run the Application
1. Install the dependecies
	```shell-script
	npm install
	```

2. Start the Application
	```shell-script
	npm start
	```

    In your browser, Open http://localhost:3000. You will see the app.
    
 ## Implementation Design
 1. I have localStorage to persist the to-do list so that data must be available after reloading.
 2. The code is written in Typescript to make it strictly-typed. The interfaces for Props and State of components are written     in models/ directory with the same name as component name.
 3. I have used @testing-library/react and jest for unit testing of each component.

## Future Scope
1. We can add To-Do with the duration and also make one more hierarchy for To-Do topic.
2. We can also use Redux store when the state management when new components or functionality will be added.
3. We can persist our data in database like firebase so as to make it private.
