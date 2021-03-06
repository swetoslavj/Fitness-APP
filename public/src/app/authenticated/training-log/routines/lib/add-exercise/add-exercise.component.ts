import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { ExerciseName } from '../../../../../shared/models/exerciseName.model';
import { WorkoutService } from '../../../../../shared/services/workout.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit, OnDestroy {
  public exerciseForm: FormGroup;
  private subscription: Subscription;
  
  constructor(
    private fb: FormBuilder,
    private workoutService: WorkoutService,
    public dialogRef: MatDialogRef<AddExerciseComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  public ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      exerciseName: ['', [ Validators.required, 
                           Validators.minLength(5), 
                           Validators.maxLength(30)] ],
      group: ['', [ Validators.required, 
                    Validators.minLength(3),
                    Validators.maxLength(10)] ]
    });
  }

  public submitExercise(): void {
    const { exerciseName, group } = this.exerciseForm.value;
    const exercise: ExerciseName = { name: exerciseName, group };
    this.subscription = this.workoutService.addExercise(exercise).subscribe((_) => {
      this.dialogRef.close();
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
