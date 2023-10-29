import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService],
})
export class ProfileComponent {
  profileForm: FormGroup;
  profilePasswordForm: FormGroup;
  profileUserDetailsForm : FormGroup;
  profileDOB: any;

  eidtProfileForm: boolean = false;
  eyesoffOne: boolean = true;
  passwordType: boolean = true;
  // eyesonOne : boolean = false;

  eyesoffTwo: boolean = true;
  eyesoffThree: boolean = true;
  passwordTypeTwo: boolean = true;
  passwordTypeThree: boolean = true;
  profileUserDetails: boolean = true;

  tab: any = 'tab3';
  showPasswordForm: boolean = false;

  selectedFamilyInfoMobileCode: any;
  FamilyInfoMobileCode = [
    { id: 1, name: '+91' },
    { id: 2, name: '+92' },
    { id: 3, name: '+93' },
    { id: 4, name: '+94' },
    { id: 5, name: '+95' },
    { id: 6, name: '+96' },
    { id: 7, name: '+97' },
  ];

  selectedProfileGenderr: any;
  selectedProfileGender = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Others' },
    { id: 4, name: 'Preffered Not To Say' },
  ];

  selectedProfileInterested: any;
  selectedProfileInterestedd = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Others' },
  ];

  constructor(public fb: FormBuilder, private messageService: MessageService) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lasstName: ['', Validators.required],
      nicckName: ['', Validators.required],
      profileProfession: ['', Validators.required],
      selectedProfileINterested: ['', Validators.required],
      // profileMobileCodee: ['', Validators.required],
      // profileMobileNumber: ['', Validators.required],
      selectedProfileGenderrr: ['', Validators.required],
      profileEmail: ['', Validators.required],
      profileCountry: ['', Validators.required],
      profileCity: ['', Validators.required],
      profileDOB: ['', Validators.required],
    });
    this.profilePasswordForm = this.fb.group({
      OldPassword: ['', Validators.required],
      NewPassword: ['', Validators.required],
      ConfirmNewPassword: ['', Validators.required],
    });
    this.profileUserDetailsForm = this.fb.group({

    })
  }

  ngOnInit() {}

  onClick(check: any) {
    if (check == 1) {
      this.tab = 'tab1';
      this.eidtProfileForm = true;
      this.showPasswordForm = false;
      this.profileUserDetails = false;
    } else if (check == 2) {
      this.tab = 'tab2';
      this.profileUserDetails = false;
      this.eidtProfileForm = false;
      this.showPasswordForm = true;
    } else if (check == 3) {
      this.tab = 'tab3';
      this.profileUserDetails = true;
      this.eidtProfileForm = false;
      this.showPasswordForm = false;
    }
  }

  showPassword(data: any) {
    if (data == 'one') {
      this.eyesoffOne = !this.eyesoffOne;
      this.passwordType = !this.passwordType;
    }
    if (data == 'two') {
      this.passwordTypeTwo = !this.passwordTypeTwo;
      this.eyesoffTwo = !this.eyesoffTwo;
    }
    if (data == 'three') {
      this.passwordTypeThree = !this.passwordTypeThree;
      this.eyesoffThree = !this.eyesoffThree;
    }
  }

  savePasswords() {
    window.scrollTo(0, 0);
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Password Reset Successfully',});
    setTimeout(() => {
    window.location.reload();
    }, 2000);
  }

  profileSubmitted(){
    this.profileForm.reset();
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Submitted Successfully',});
  }

  profile: any = {};
  confirmPasswordError: boolean = false;
  hideShowCpasswordError() {
    if (this.profile.confirmNewPassword >= 1) {
      this.confirmPasswordError = true;
    }
    if (this.profile.confirmNewPassword === this.profile.newPassword) {
      this.confirmPasswordError = false;
    }
    else this.confirmPasswordError = true;
  }
  sameOldNewPassword : boolean = false;
  notsameNewOldPasswords(){
    if ( this.profile.newPassword === this.profile.oldPassword ){
        this.sameOldNewPassword = true;
    }
    else this.sameOldNewPassword = false;
  }

}
