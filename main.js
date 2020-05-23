const GGSSX_API_KEY = '50fbb90e9aceed3f3ad61c8bbb1afbede62c6d7c52e6037630089d65cc00d6d5'
const GGSSX_URL = 'https://ggs.sx/pre-prod'
const GGSSX_GET_URL = `${GGSSX_URL}/api/v1/user/discord`
const moment = require(['moment'])
function ggs_data(form_data) {
    let discordId = form_data.querySelector("#discordid").value
    $.getJSON(`${GGSSX_GET_URL}/${discordId}?api_token=${GGSSX_API_KEY}`, function( data ) {
    console.log(data)
    let total_wealth = data.character.money_bank + response.data.character.money_held;
    let last_played_unsorted = data.character.last_played;
    let convdataTime = moment(last_played_unsorted).format('HH:mm | DD/MM/YYYY')
    let membersince = moment(data.character.created).format('HH:mm | DD/MM/YYYY')
    let policeranknum = data.character.cop_level;
    let policeranks = ["Not Whitelisted","Trainee","Recruit","Constable","Senior Constable","Sergeant","Senior Sergeant","Superintendent","Deputy Commissioner","Assistant Commissioner","Commissioner"]
    let policerank = policeranks[policeranknum];
    let bank_items = data.character.bank_items;
    let cars = data.character.vehicles;
    let lnf = data.character.lostandfound;
    let prim_group = data.groups[0]
    let sec_group = data.groups[1]
    if(sec_group == undefined) {
        sec_group = 'No Secondary Group';
    }else{
        sec_group = sec_group.name
    }
    let count_bank = 0;
    for (var b in bank_items) {
    count_bank = count_bank + 1;
}
    let count_cars = 0;
    for (var c in cars) {
    count_cars = count_cars + 1;
}
    let count_lnf = 0;
    for (var c in lnf) {
        count_lnf = count_lnf + 1;
}
    if(response.data.character.organisation == null) {
        org = 'No Organisation';
    }else{
        org = `${response.data.character.organisation.name} | **MOTD**: ${response.data.character.organisation.motd}`;
    }
});
}