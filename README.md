
# Dashboard X

**Dashboard X** is a responsive and dynamic Angular-based project generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 18.x or higher): [Download Node.js](https://nodejs.org/)
- **Angular CLI** (version 17.0.5 or higher):

  To install Angular CLI globally, run (if you don't have it already):

  ```bash
  npm install -g @angular/cli@17.0.5
  ```

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/assessment-project.git
   cd assessment-project
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Running the Project

To serve the project locally, run:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if any changes are made.

## Login Credentials

To access the dashboard, use the following credentials:

- **Email**: `test@test.com`
- **Password**: `Admin123`

## Project Structure

```bash
assessment-project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   ├── admin-module/
│   │   ├── app.route.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

- **components**: Contains all the Angular components used in the project.
- **services**: Includes services for API calls and business logic.
- **admin-module**: Manages the admin-related modules and functionalities.
- **app.route.ts**: Manages application routing configuration.
- **environments**: Configuration for different environments (development/production).

## Features Covered

**Login & Registration UI:** User-friendly interfaces for logging in and registering new users.

**AuthGuard:** Route protection based on user authentication status.

**Interceptor:** HTTP Interceptor for handling API requests and responses (e.g., adding authorization tokens).

**Admin Module:** A dedicated module for admin functionalities and settings.

**Dashboard:** An interactive dashboard with user data and analytics.

**Messages:** A section for user messages and notifications.


## Contact

For any queries or feedback, please feel free to reach out. 
**Email:** shawon.taluckder2@gmail.com
