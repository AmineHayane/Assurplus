// Import the core angular services.
import { animate } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Component } from "@angular/core";
import { style } from "@angular/core";
import { transition } from "@angular/core";
import { trigger } from "@angular/core";
import { Animations } from '../animations/animations';

interface Friend {
    id: number;
    title: string;
    description: string;
    img : string;
}

type Orientation = ( "prev" | "next" | "none" );

@Component({
    selector: "app-carousel",
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css'],
    animations : [Animations.carousel, Animations.scale(1.2)]

})
export class CarouselComponent {

    SCALED : string[] = ['inactive', 'inactive'];
    scaleIn(i : number) {this.SCALED[i] = 'active'}
    scaleOut(i : number) {this.SCALED[i] = 'inactive'}

    public orientation: Orientation;
    public selectedFriend: Friend;

    private changeDetectorRef: ChangeDetectorRef;
    private friends: Friend[];


    // I initialize the component.
    constructor( changeDetectorRef: ChangeDetectorRef ) {

        this.changeDetectorRef = changeDetectorRef;
        this.orientation = "none";

        // Setup the friends collection.
        this.friends = [
            {
                id: 1,
                title: "Reconnaissance d'image",
                description: "Prenez tout simplement votre produit en photo, nos algorithmes se chargeront de procéder à son identification",
                img : 'photo'
            },
            {
                id: 2,
                title: "Scan via code barre",
                description: "Si votre emballage produit est toujours à votre disposition, scannez le code et votre produit sera reconnu",
                img : 'barcode'
            },
            {
                id: 3,
                title: "Recherche manuelle",
                description: "Profitez de notre moteur intelligent pour rechercher directement votre produit",
                img : 'search'
            },

        ];

        // Randomly(ish) select the initial friend to display.
        this.selectedFriend = this.friends[ Math.floor( Math.random() * this.friends.length ) ];

    }


    // ---
    // PUBLIC METHODS.
    // ---


    // I cycle to the next friend in the collection.
    public showNextFriend() : void {

        // Change the "state" for our animation trigger.
        this.orientation = "next";

        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();

        // Find the currently selected index.
        var index = this.friends.indexOf( this.selectedFriend );

        // Move the rendered element to the next index - this will cause the current item
        // to enter the ( "next" => "void" ) transition and this new item to enter the
        // ( "void" => "next" ) transition.
        this.selectedFriend = this.friends[ index + 1 ]
            ? this.friends[ index + 1 ]
            : this.friends[ 0 ]
        ;

    }


    // I cycle to the previous friend in the collection.
    public showPrevFriend() : void {

        // Change the "state" for our animation trigger.
        this.orientation = "prev";

        // Force the Template to apply the new animation state before we actually
        // change the rendered element view-model. If we don't force a change-detection,
        // the new [@orientation] state won't be applied prior to the "leave" transition;
        // which means that we won't be leaving from the "expected" state.
        this.changeDetectorRef.detectChanges();

        // Find the currently selected index.
        var index = this.friends.indexOf( this.selectedFriend );

        // Move the rendered element to the previous index - this will cause the current
        // item to enter the ( "prev" => "void" ) transition and this new item to enter
        // the ( "void" => "prev" ) transition.
        this.selectedFriend = this.friends[ index - 1 ]
            ? this.friends[ index - 1 ]
            : this.friends[ this.friends.length - 1 ]
        ;

    }

}
