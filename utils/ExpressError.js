class ExpressError extends Error {
    constructor(statuaCode, message) {
        super();
        this.statuaCode = statuaCode;
        this.message = message;
    }
}

module.exports = ExpressError;