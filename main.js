const GGSSX_API_KEY = secret.GGS_API_KEY
const GGSSX_URL = 'https://ggs.sx/pre-prod'
const GGSSX_GET_URL = `${GGSSX_URL}/api/v1/user/discord`
function ggs_data(form_data) {
    let discordId = form_data.querySelector("#discordid").value
    $.getJSON(`${GGSSX_GET_URL}/${discordId}?api_token=${GGSSX_API_KEY}`, function (data) {
        console.log(data)
        let total_wealth = data.character.money_bank + data.character.money_held;
        let last_played_unsorted = data.character.last_played;
        let convdataTime = last_played_unsorted;
        let membersince = data.character.created;
        let policeranknum = data.character.cop_level;
        let policeranks = ["Not Whitelisted", "Trainee", "Recruit", "Constable", "Senior Constable", "Sergeant", "Senior Sergeant", "Superintendent", "Deputy Commissioner", "Assistant Commissioner", "Commissioner"]
        let policerank = policeranks[policeranknum];
        let bank_items = data.character.bank_items;
        let cars = data.character.vehicles;
        let lnf = data.character.lostandfound;
        let prim_group = data.groups[0]
        let sec_group = data.groups[1]
        if (sec_group == undefined) {
            sec_group = 'No Secondary Group';
        } else {
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
        if (data.character.organisation == null) {
            org = 'No Organisation';
        } else {
            org = `${data.character.organisation.name} | **MOTD**: ${.data.character.organisation.motd}`;
        }
        document.getElementById("steamname").value = data.nickname;
        document.getElementById("steamid64").value = data.steam_64;
        document.getElementById("primgroup").value = prim_group.name;
        document.getElementById("secgroup").value = sec_group;
        document.getElementById("forumprofile").value = `${GGSSX_URL}/user/${data.steam_64}`;
        document.getElementById("member_since").value = membersince;
        document.getElementById("totalplaytime").value = data.character.total_time;
        document.getElementById("rpname").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("pdrank").value = "";
        document.getElementById("wealth").value = "";
        document.getElementById("lastplayed").value = "";
        document.getElementById("org").value = "";
        document.getElementById("bankitemcount").value = "";
        document.getElementById("lostfoundcount").value = "";
        document.getElementById("carcount").value = "";
    });
}