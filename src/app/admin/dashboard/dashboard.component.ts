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
  addTeamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addTeamForm = this.fb.group({
      name: ['', Validators.required],
      members: [0, [Validators.required, Validators.min(1)]],
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
      this.addTeamForm.reset({ members: 10 });
    }
  }
}
