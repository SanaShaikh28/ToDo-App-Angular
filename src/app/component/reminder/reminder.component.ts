/**
* @author: SANA SHAIKh
* @since: 9/April/2018
* @description:This component is for reminding the notes
*/

import { Component, OnInit } from '@angular/core';
import { NoteResponse } from '../../model/noteresponse';
import { UserService, NoteService } from '../../service';

@Component({
    selector: 'app-reminder',
    templateUrl: './reminder.component.html',
    styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

    notes: NoteResponse[];
    crossSvg = '/assets/icons/cross.svg';

    constructor(private userServiceObj: UserService, private noteServiceObj: NoteService) { }
    ngOnInit() {
        this.refreshNote();
    }

    /**@method:This method is to fetch notes */
    refreshNote(): void {
        this.noteServiceObj.getNotes()
                            .subscribe(response => {
                              this.notes = response;
                                console.log("Notes fetched successfully..", response)
            });
    };


    /**@method:This method is to move the notes to trash
     * @param:note,status,field
     */
    update(note): void {
        this.noteServiceObj.updateNotes(note)
                            .subscribe(response => {
                                console.log(response);
                                this.refreshNote();
            });
    }

    updateNotes(note, status, field) {

        if (field == 'trash') {

            note.inTrash = status;
            this.update(note);
            console.log("Moved notes to trash..");
        }

        else if (field == 'archive') {

            note.isArchive = status;
            this.update(note);
            console.log("Moved notes to archive...");
        }

        else if (field == 'pin') {

            note.isPin = status;
            this.update(note);
            console.log("Pin note..");
        }

        else if (field == 'pin') {

            note.isPin = status;
            this.update(note);
            console.log("Unpinned note..");
        }

        else if (field == 'color') {

            this.update(note);
            console.log("Set color");
        }
    };

    /**@method:This method is to set reminder of notes
     * @param:note,field
     */
    remind(note): void {
        this.noteServiceObj.updateNotes(note)
                            .subscribe(response => {
                                console.log(response);
                                    this.refreshNote();
            });
    }

    saveReminder(note, field) {

        var today = new Date();

        if (field == 'today') {

            today.setHours(20);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }
        else if (field == 'tomorrow') {

            today.setDate(today.getDate() + 1);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);

        } 
        else if (field == 'nextWeek') {

            today.setDate(today.getDate() + 6);
            today.setHours(8);
            today.setMinutes(0);
            today.setMilliseconds(0);
            note.reminder = today;
            this.remind(note);
        }

        else if (field == 'null') {
           
            note.reminder=null;
            this.remind(note);
        }
    }

}
