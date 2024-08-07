# Task Management Application

## Introduction
This task management application allows users to manage their tasks efficiently with features to add, edit, delete, and filter tasks. It is built using ReactJS, JavaScript, Redux, and Redux Persist.

## Features

### CRUD Operations
- **Add Task:** Users can create new tasks by entering a title, description, due date, and completion status.
- **Edit Task:** Existing tasks can be edited, including updating any of the task fields.
- **Delete Task:** Tasks can be removed with a confirmation dialog to prevent accidental deletions.
- **Mark Completed/Incomplete:** Tasks can be toggled between completed and incomplete statuses.

### Filtering and Sorting
- **Filter by Completion Status:** Users can view tasks based on their completion status—completed, incomplete, or all.
- **Sort by Due Date:** Tasks can be sorted in ascending or descending order based on their due date.

### Task Counts
- **Total Projects Count:** Displays the total number of projects.
- **Completed Tasks Count:** Displays the number of tasks marked as completed.
- **Incomplete Tasks Count:** Displays the number of tasks marked as incomplete.
- **Overdue Tasks Count:** Displays the number of tasks past their due date.

### User Interface
- The application features a clean, modern design with intuitive navigation and interactive elements.

## Usage

### Installation
1. Clone the repository: `git clone https://github.com/username/repository.git`
2. Navigate to the project directory: `cd repository`
3. Install dependencies: `npm install`

### Running the Application
1. Start the development server: `npm start`
2. Open your browser and navigate to `http://localhost:3000`

### Basic Usage
- Add tasks using the form in the TaskDialog component.
- Edit or delete tasks from the task list.
- Use filters and sorting options to manage task visibility and organization.
- View the dashboard to see the total count of projects, completed tasks, incomplete tasks, and overdue tasks.

## Dependencies

- **Redux and State Management:**
- **ReactJS:** A JavaScript library for building user interfaces.
- **Redux:** A state management library.
- **Redux Persist:** A library to persist Redux state across sessions.

- **Routing:**
  - **react-router-dom**: DOM bindings for React Router, enabling dynamic routing in React applications.

- **UI Libraries:**
  - **@mui/material**: Material-UI, a popular React UI framework implementing Google’s Material Design.
  - **@mui/icons-material**: A package of Material Design icons for use with Material-UI.
  - **@mui/styled-engine-sc**: Styled-components engine for Material-UI.
  - **@emotion/react**: Library for writing CSS styles with JavaScript using a performant and flexible approach.
  - **@emotion/styled**: Styled-components for @emotion.
  - **styled-components**: A library for styling React components using tagged template literals.

- **Date Management:**
  - **dayjs**: A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

- **Alerts:**
  - **sweetalert2**: A beautiful, responsive, customizable replacement for JavaScript's popup boxes.

## Additional Information

### Contribution Guidelines
- Follow the code style conventions outlined in `.eslintrc` and submit pull requests for contributions.

### License
This project is licensed under the MIT License.
