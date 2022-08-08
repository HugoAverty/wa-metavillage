/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.onEnterLayer('officeZone').subscribe(() => {
        WA.room.hideLayer("roofOffice0");
        WA.room.hideLayer("roofOffice1");
        WA.room.hideLayer("roofOffice2");
    })      

    WA.room.onLeaveLayer('officeZone').subscribe(() => {
        WA.room.showLayer("roofOffice0");
        WA.room.showLayer("roofOffice1");
        WA.room.showLayer("roofOffice2");
    })


    WA.room.onEnterLayer('nftZone').subscribe(() => {
        WA.room.hideLayer("roofNft0");
        WA.room.hideLayer("roofNft1");
        WA.room.hideLayer("roofNft2");
    })      

    WA.room.onLeaveLayer('nftZone').subscribe(() => {
        WA.room.showLayer("roofNft0");
        WA.room.showLayer("roofNft1");
        WA.room.showLayer("roofNft2");
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


export {};
