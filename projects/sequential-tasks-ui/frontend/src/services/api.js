const get = async (url) => {
    const response = await fetch(url)
        .catch(error => {
            console.log(error);
            return { ok: false, status: error };
        });

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        return { error: message };
    }

    return await response.json();
};

const getSuccess = async () => {
    const url = `http://localhost:4300/placeholder/getsuccess`;
    return await get(url);
};

const getFailed = async () => {
    const url = `http://localhost:4300/placeholder/getfailed`;
    return await get(url);
};

const getException = async () => {
    const url = `http://localhost:4300/placeholder/getexception`;
    return await get(url);
};

const step1 = async () => await waitAndResult(1000, true);
const step2 = async () => await waitAndResult(500, true);
const step3 = async () => await waitAndResult(350, false);
const step4 = async () => await waitAndResult(500, true);

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const waitAndResult = async (ms, success) => {
    await snooze(ms);
    return {
        error: success ? null : "Something bad happened",
        response: longResponse,
    };
}

const longResponse = "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry " +
    "richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard " +
    "dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf " +
    "moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla " +
    "assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore " +
    "wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur " +
    "butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim " +
    "aesthetic synth nesciunt you probably haven't heard of them accusamus " +
    "labore sustainable VHS."

// expose your method to other services or actions
const API = {
    get,
    getSuccess,
    getFailed,
    getException,
    step1,
    step2,
    step3,
    step4,
};
export default API;
