const { types } = require("../../types/types");

describe('Tests in types', () => {
    test('should types object', () => {
        expect( types ).toEqual(
            {
                authLogin: '[auth]: Login',
                authFinishCheking: '[auth]: Finish checking',
                authLogout: '[auth]: Logout',
                uiOpenModal: '[ui] Open modal',
                uiCloseModal: '[ui] Close modal',
                eventStartAddNew: '[event] Start Add new',
                eventAddNew: '[event] Add new',
                eventSetActive: '[event] Set active',
                eventClearActive: '[event] Clear active',
                eventUpdated: '[event] Updated',
                eventStartDelete: '[event] Start Deleted',
                eventDeleted: '[event] Deleted',
                eventLoaded: '[events] Loaded',
                eventClear: '[events] Clear',
                calendarDateSelected: '[calendar] Date selected',
            }
        )
    });
});