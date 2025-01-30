import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { TabSelectBtnComponent } from '../tab-select-btn/tab-select-btn.component';
import { DummyDataService } from '../../../services/dummy-data.service';
import { TitleComponent } from '../../../common-components/title/title.component';
import { InputComponent } from '../../../common-components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BtnComponent } from '../../../common-components/btn/btn.component';
import { TextareaUiComponent } from '../../../common-components/textarea-ui/textarea-ui.component';
import { InfluencerSettingOptionCardComponent } from '../influencer-setting-option-card/influencer-setting-option-card.component';
import { ToggleBtnComponent } from '../../../common-components/toggle-btn/toggle-btn.component';
import { InfluencerService } from '../../../services/influencer.service';
import { ApiResponse } from '../../models/api-response';
import { ToastNotifyService } from '../../../services/toast-notify.service';

@Component({
  selector: 'app-research-config-form',
  imports: [
    ReactiveFormsModule,
    TitleComponent,
    TabSelectBtnComponent,
    InputComponent,
    BtnComponent,
    TextareaUiComponent,
    InfluencerSettingOptionCardComponent,
    ToggleBtnComponent,
  ],
  templateUrl: './research-config-form.component.html',
  styles: ``,
})
export class ResearchConfigFormComponent implements OnInit {
  selectedSciJournalIndex: number = 0;
  selectedMainTabIndex: number = 0;
  btnLoading: boolean = false;
  // @Output() onSelectedMainTabIndex=new EventEmitter<number>();
  scientificJournalList: { name: string; selected: boolean }[] = [];
  isAddedScientificJournalItem: boolean = false;
  influencerSettingOptionList: any[] = [];
  dummyDataService: DummyDataService = inject(DummyDataService);
  influencerService: InfluencerService = inject(InfluencerService);
  toast: ToastNotifyService = inject(ToastNotifyService);
  timeRangeList: { id: number; name: string }[] = [];
  selectedTimeRangeIndex: number = 0;
  researchConfigForm: FormGroup = new FormGroup({});
  claimConfigRequest = {
    influencerName: '',
    claimsToAnalyzeCount: 0,
    productsToFindPerInfluencerCount: 0,
    researchNotes: '',
    revenueAnalyzed: false,
    verifiedScientificJournal: false,
    timeRange: '',
    sciJournalSet: [''],
  };
  sciJournalSet: string[] = [];
  revenueAnalyzed: boolean = false;
  verifiedScientificJournal: boolean = false;
  addScientificJournalInput: FormControl = new FormControl('', []);

  ngOnInit(): void {
    this.timeRangeList = this.dummyDataService.timeRangeList;
    this.scientificJournalList = this.dummyDataService.scientificJournalList;
    this.influencerSettingOptionList =
      this.dummyDataService.influencerSettingOptionList;
    this.createResearchConfigForm();
  }
  createResearchConfigForm() {
    this.researchConfigForm = new FormGroup({
      influencerName: new FormControl('', [Validators.required]),
      claimsToAnalyzeCount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
      ]),
      productsToFindPerInfluencerCount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
      ]),
      researchNotes: new FormControl('', []),
    });
  }
  onMainTabNavSelectedHandler(name: string, index: number) {
    this.selectedMainTabIndex = index;
  }
  onSciJournalSelectedHandler(
    sciJournalObj: { name: string; selected: boolean },
    index: number
  ) {
    this.selectedSciJournalIndex = index;
    this.scientificJournalList = this.scientificJournalList.map((item) => {
      if (item.name === sciJournalObj.name) {
        return { ...item, selected: !item.selected };
      } else {
        return { ...item, selected: false };
      }
    });
  }
  onTimeRangeSelectedHandler(name: string, index: number) {
    this.selectedTimeRangeIndex = index;
  }
  selectAllJornalHandler(name: string) {
    this.scientificJournalList.forEach((item) => (item.selected = true));
  }
  deSelectAllJornalHandler(name: string) {
    this.scientificJournalList.forEach((item) => (item.selected = false));
  }

  addNewJornalHandler(name: string) {
    console.log(name + ' Clicked');

    this.removeEmptyStrings(this.scientificJournalList);
    //this.scientificJournalList.push('');
    this.isAddedScientificJournalItem = !this.isAddedScientificJournalItem;

    console.log(this.scientificJournalList);
  }
  onRemoveAddJornalInputHandler() {
    this.isAddedScientificJournalItem = false;
  }
  onToggleVerifyScientificBtnHandler() {
    console.log(
      this.verifiedScientificJournal + 'onToggleVerifyScientificBtnHandler'
    );
    this.verifiedScientificJournal = !this.verifiedScientificJournal;

    console.log(
      this.verifiedScientificJournal + 'onToggleVerifyScientificBtnHandler'
    );
  }
  onAddItemByEnterKeyHandler(value: string) {
    console.log(this.scientificJournalList);
    console.log(value);
    this.scientificJournalList.push({ name: value, selected: true });
    this.removeEmptyStrings(this.scientificJournalList);

    console.log(this.scientificJournalList);
    this.isAddedScientificJournalItem = false;
  }
  onToggleRevenueAnaylsisBtnHandler() {
    console.log(this.revenueAnalyzed + '  onToggleRevenueAnaylsisBtnHandler');
    this.revenueAnalyzed = !this.revenueAnalyzed;

    console.log(this.revenueAnalyzed + '  onToggleRevenueAnaylsisBtnHandler');
  }
  removeEmptyStrings(
    scientificJournalList: { name: string; selected: boolean }[]
  ) {
    this.scientificJournalList = scientificJournalList.filter(
      (item) => item.name.trim() !== ''
    );
    console.log(this.scientificJournalList);
  }
  formReset(): void {
    this.researchConfigForm.reset();
    this.revenueAnalyzed = false;
    this.verifiedScientificJournal = false;
    this.selectedTimeRangeIndex = 0;
    this.scientificJournalList.forEach((item) => (item.selected = false));
  }
  startResearchHandler(name: string) {
    console.log(name + ' Clicked');
    this.btnLoading = true;
    this.sciJournalSet = this.scientificJournalList
      .filter((item) => item.selected === true)
      .map((item) => item.name);

    console.log(this.sciJournalSet);
    this.claimConfigRequest = this.researchConfigForm.value;
    this.claimConfigRequest = {
      ...this.claimConfigRequest,
      sciJournalSet: this.sciJournalSet,
    };
    this.claimConfigRequest = {
      ...this.claimConfigRequest,
      verifiedScientificJournal: this.verifiedScientificJournal,
    };
    this.claimConfigRequest = {
      ...this.claimConfigRequest,
      timeRange: name,
    };
    this.claimConfigRequest = {
      ...this.claimConfigRequest,
      revenueAnalyzed: this.revenueAnalyzed,
    };

    console.log(this.claimConfigRequest);
    this.influencerService
      .createSpecificInfluencer(this.claimConfigRequest)
      .subscribe({
        next: (apiResponse: ApiResponse) => {
          console.log(apiResponse);
          this.formReset();
          this.toast.showSuccess(apiResponse.message, 'Research configuration');
          this.btnLoading = false;
        },
        error: (apiResponse: ApiResponse) => {
          console.log(apiResponse);
          this.toast.showError(apiResponse.message, 'Research configuration');
          this.btnLoading = false;
        },
      });
  }
}
