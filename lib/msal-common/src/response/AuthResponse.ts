/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * AuthResponse base type returned by MSAL library on success
 * - userRequestState: User given state
 */
export type AuthResponse = {
    authority: string;
    userRequestState: string;
};
