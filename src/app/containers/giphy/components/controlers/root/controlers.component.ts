// rxjs
import {Subscription} from 'rxjs';

import {
  Component, EventEmitter, Input,
  OnDestroy,
  OnInit, Output
} from '@angular/core';
import {Router} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

// todo ... will be discussed
// locales
import {localeKeys} from './locale-keys';

@Component({
  selector: 'app-controlers',
  templateUrl: './controlers.component.html',
  styleUrls: ['./controlers.component.sass']
})
export class ControlersComponent implements OnInit, OnDestroy {
  @Input() searchVal = '';
  @Output() data: EventEmitter<{ search: string }> = new EventEmitter<{
    search: string
  }>();

  // localization
  localeKeys = localeKeys;

  public readonly SEARCH = 'search';

  controlsForm: FormGroup;

  onConFormSubs: Subscription = null;


  ngOnInit() {
    this.createFrom();

    this.onConFormSubs = this.controlsForm.valueChanges.subscribe((data) => {
      this.data.emit(this.onControlFormChange());
    });
  }

  ngOnDestroy(): void {
    this.onConFormSubs.unsubscribe();
  }

  onControlFormChange() {
    const search = this.controlsForm.controls[this.SEARCH].value;
    return {
      search
    };
  }

  createFrom() {
    const formControls: any = {
      [this.SEARCH]: new FormControl(this.searchVal, [
        Validators.required
      ]),
    };
    this.controlsForm = new FormGroup(formControls);
  }

  cleanSearch($event) {
    $event.target.value = '';
  }
}
