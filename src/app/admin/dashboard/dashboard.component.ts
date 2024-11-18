import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  teams: any[] = [
    { name: 'Marketing Team', members: 25 },
    { name: 'Development Team', members: 12 },
    { name: 'Sales Team', members: 18 },
    { name: 'Design Team', members: 30 },
    { name: 'Support Team', members: 10 },
  ];

  // Projects array with 5 sample data entries
  projects: any[] = [
    {
      projectName: 'Project Alpha',
      teamName: 'Development Team',
      attachmentCount: 5,
      daysLeft: 10,
      progressValue: 45,
      membersCount: 12
    },
    {
      projectName: 'Project Beta',
      teamName: 'Marketing Team',
      attachmentCount: 3,
      daysLeft: 7,
      progressValue: 65,
      membersCount: 8
    },
    {
      projectName: 'Project Gamma',
      teamName: 'Sales Team',
      attachmentCount: 8,
      daysLeft: 3,
      progressValue: 80,
      membersCount: 15
    },
    {
      projectName: 'Project Delta',
      teamName: 'Support Team',
      attachmentCount: 2,
      daysLeft: 15,
      progressValue: 30,
      membersCount: 6
    },
    {
      projectName: 'Project Epsilon',
      teamName: 'Design Team',
      attachmentCount: 10,
      daysLeft: 12,
      progressValue: 55,
      membersCount: 20
    }
  ];

  addTeamForm: FormGroup;
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addTeamForm = this.fb.group({
      name: ['', Validators.required],
      members: [0, [Validators.required, Validators.min(1)]],
    });

    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      teamName: ['', Validators.required],
      attachmentCount: [0, Validators.min(0)],
      daysLeft: [0, Validators.min(0)],
      progressValue: [0, [Validators.min(0), Validators.max(100)]],
      membersCount: [0, Validators.min(1)]
    });
  }

  // Function to display avatars (max 10)
  displayAvatars(memberCount: number): number {
    return Math.min(10, memberCount);
  }

  addTeam(): void {
    if (this.addTeamForm.valid) {
      const team = this.addTeamForm.value;
      this.teams.push(team);
      this.addTeamForm.reset({ members: 0 });
    }
  }

  // Function to add a new project
  addProject(): void {
    if (this.projectForm.valid) {
      const project = this.projectForm.value;
      this.projects.push(project);  // Add new project to the projects list
      this.projectForm.reset({
        attachmentCount: 0,
        daysLeft: 0,
        progressValue: 0,
        membersCount: 0,
      });  // Reset form fields after submission
    }
  }

  closeProject() {
    this.projectForm.reset({
      attachmentCount: 0,
      daysLeft: 0,
      progressValue: 0,
      membersCount: 0,
    });
  }

  closeTeam() {
    this.addTeamForm.reset({ members: 0 });
  }

  editProject(project: any): void {
    // Handle the editing logic, for example:
    // Open a modal with project data pre-filled for editing
    console.log('Edit project', project);
    // You can add a modal trigger here or navigate to an edit page, depending on your requirements
  }
  
  deleteProject(project: any): void {
    // Handle the delete logic, for example:
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1); // Remove the project from the list
    }
    console.log('Deleted project', project);
  }

  editTeam(team: any): void {
    // Handle the editing logic, for example:
    // Open a modal with project data pre-filled for editing
    console.log('Edit team', team);
    // You can add a modal trigger here or navigate to an edit page, depending on your requirements
  }
  
  deleteTeam(team: any): void {
    // Handle the delete logic, for example:
    const index = this.teams.indexOf(team);
    if (index !== -1) {
      this.teams.splice(index, 1); // Remove the project from the list
    }
    console.log('Deleted project', team);
  }
}
