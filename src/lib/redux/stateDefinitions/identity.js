/**
 * State representing authentication information.
 *
 * It will be made permanent.
 */
export default {
    /**
     * Login date and time
     *
     * If this State is null, the login form is displayed as if the login procedure has not been made.
     */
    authorizedAt: null,
    // Access token
    accessToken: null,
    // Refresh token
    refreshToken: null,
    /**
     * 
     * Access token expiration date
     * 
     */
    expiresIn: null,
  };