/**
 * Created by Marc on 8/27/2015.
 */

//Variables
var DEV_KEY = 'f54f33d6-b22b-4375-852c-9eb092fe49a6';

//*createComparison* - The function to be called when the 'Compare!' button is clicked.
//                   Creates tables of the summoners stats, using functions getSummonerId
//                   and getSummonerStats.
function createComparison(){

    //Get the values that the user has inputted
    var summoner1 = $("#Summoner1").val();
    var summoner2 = $("#Summoner2").val();

    //Gives off an error if the user inputs (an) empty form(s)
    if(summoner1 == "" || summoner2 == "") { alert("Error: empty value(s) in summoner form"); return null;}

    //Get the summoner IDs for both the summoner names
    var summoner1ID = getSummonerId(summoner1);
    var summoner2ID = getSummonerId(summoner2);

    //Get the summoners profile icon ID
    var summoner1ProfIconID = getSummonerProfIconId(summoner1);
    var summoner2ProfIconID = getSummonerProfIconId(summoner2);

    //Get the stats between the two summoners
    var summoner1Stats = getSummonerStats(summoner1ID);
    var summoner2Stats = getSummonerStats(summoner2ID);

    /******************************************************/
    /****Enter the summoner stat values into the table.****/
    /****If there is no stat for specified game, enter 0***/
    /******************************************************/

    //Enter summoner profile ID and summoner name
    document.getElementById("summoner1Name").innerHTML = "<img src = 'http://ddragon.leagueoflegends.com/cdn/5.15.1/img/profileicon/"  + summoner1ProfIconID + ".png'/></br>" + summoner1.toUpperCase();
    document.getElementById("summoner2Name").innerHTML = "<img src = 'http://ddragon.leagueoflegends.com/cdn/5.15.1/img/profileicon/"  + summoner2ProfIconID + ".png'/></br>" + summoner2.toUpperCase();

    //Ranked Solo 5x5 Stats
    if (summoner1Stats[0] == null) {
        document.getElementById("sum1RankedSolo5x5Wins").innerHTML = 0;
        document.getElementById("sum1RankedSolo5x5Losses").innerHTML = 0;
    }
    else{
        document.getElementById("sum1RankedSolo5x5Wins").innerHTML = summoner1Stats[0][1];
        document.getElementById("sum1RankedSolo5x5Losses").innerHTML = summoner1Stats[0][2];
    }

    if (summoner2Stats[0] == null) {
        document.getElementById("sum2RankedSolo5x5Wins").innerHTML = 0;
        document.getElementById("sum2RankedSolo5x5Losses").innerHTML = 0;
    }
    else{
        document.getElementById("sum2RankedSolo5x5Wins").innerHTML = summoner2Stats[0][1];
        document.getElementById("sum2RankedSolo5x5Losses").innerHTML = summoner2Stats[0][2];
    }

    //Ranked Team 5x5 stats
    if (summoner1Stats[1] == null) {
        document.getElementById("sum1RankedTeam5x5Wins").innerHTML = 0;
        document.getElementById("sum1RankedTeam5x5Losses").innerHTML = 0;
    }
    else{
        document.getElementById("sum1RankedTeam5x5Wins").innerHTML = summoner1Stats[1][1];
        document.getElementById("sum1RankedTeam5x5Losses").innerHTML = summoner1Stats[1][2];
    }

    if (summoner2Stats[1] == null) {
        document.getElementById("sum2RankedTeam5x5Wins").innerHTML = 0;
        document.getElementById("sum2RankedTeam5x5Losses").innerHTML = 0;
    }
    else{
        document.getElementById("sum2RankedTeam5x5Wins").innerHTML = summoner2Stats[1][1];
        document.getElementById("sum2RankedTeam5x5Losses").innerHTML = summoner2Stats[1][2];
    }

    //Unranked 3x3 Stats
    if (summoner1Stats[2] == null) {
        document.getElementById("sum1Unranked3x3MinionKills").innerHTML = 0;
        document.getElementById("sum1Unranked3x3ChampionKills").innerHTML = 0;
        document.getElementById("sum1Unranked3x3Assists").innerHTML = 0;
        document.getElementById("sum1Unranked3x3TurretKills").innerHTML = 0;
        document.getElementById("sum1Unranked3x3Wins").innerHTML = 0;
    }
    else{
        document.getElementById("sum1Unranked3x3MinionKills").innerHTML = summoner1Stats[2][1];
        document.getElementById("sum1Unranked3x3ChampionKills").innerHTML = summoner1Stats[2][2];
        document.getElementById("sum1Unranked3x3Assists").innerHTML = summoner1Stats[2][3];
        document.getElementById("sum1Unranked3x3TurretKills").innerHTML = summoner1Stats[2][4];
        document.getElementById("sum1Unranked3x3Wins").innerHTML = summoner1Stats[2][5];
    }

    if (summoner2Stats[2] == null) {
        document.getElementById("sum2Unranked3x3MinionKills").innerHTML = 0;
        document.getElementById("sum2Unranked3x3ChampionKills").innerHTML = 0;
        document.getElementById("sum2Unranked3x3Assists").innerHTML = 0;
        document.getElementById("sum2Unranked3x3TurretKills").innerHTML = 0;
        document.getElementById("sum2Unranked3x3Wins").innerHTML = 0;
    }
    else{
        document.getElementById("sum2Unranked3x3MinionKills").innerHTML = summoner2Stats[2][1];
        document.getElementById("sum2Unranked3x3ChampionKills").innerHTML = summoner2Stats[2][2];
        document.getElementById("sum2Unranked3x3Assists").innerHTML = summoner2Stats[2][3];
        document.getElementById("sum2Unranked3x3TurretKills").innerHTML = summoner2Stats[2][4];
        document.getElementById("sum2Unranked3x3Wins").innerHTML = summoner2Stats[2][5];
    }

    //URF stats
    if (summoner1Stats[3] == null) {
        document.getElementById("sum1URFMinionKills").innerHTML = 0;
        document.getElementById("sum1URFChampionKills").innerHTML = 0;
        document.getElementById("sum1URFAssists").innerHTML = 0;
        document.getElementById("sum1URFTurretKills").innerHTML = 0;
        document.getElementById("sum1URFWins").innerHTML = 0;
    }
    else{
        document.getElementById("sum1URFMinionKills").innerHTML = summoner1Stats[3][1];
        document.getElementById("sum1URFChampionKills").innerHTML = summoner1Stats[3][2];
        document.getElementById("sum1URFAssists").innerHTML = summoner1Stats[3][3];
        document.getElementById("sum1URFTurretKills").innerHTML = summoner1Stats[3][4];
        document.getElementById("sum1URFWins").innerHTML = summoner1Stats[3][5];
    }

    if (summoner2Stats[3] == null) {
        document.getElementById("sum2URFMinionKills").innerHTML = 0;
        document.getElementById("sum2URFChampionKills").innerHTML = 0;
        document.getElementById("sum2URFAssists").innerHTML = 0;
        document.getElementById("sum2URFTurretKills").innerHTML = 0;
        document.getElementById("sum2URFWins").innerHTML = 0;
    }
    else{
        document.getElementById("sum2URFMinionKills").innerHTML = summoner2Stats[3][1];
        document.getElementById("sum2URFChampionKills").innerHTML = summoner2Stats[3][2];
        document.getElementById("sum2URFAssists").innerHTML = summoner2Stats[3][3];
        document.getElementById("sum2URFTurretKills").innerHTML = summoner2Stats[3][4];
        document.getElementById("sum2URFWins").innerHTML = summoner2Stats[3][5];
    }

    //Unranked 5x5 Stats
    if (summoner1Stats[4] == null) {
        document.getElementById("sum1UnRanked5x5MinionKills").innerHTML = 0;
        document.getElementById("sum1UnRanked5x5ChampionKills").innerHTML = 0;
        document.getElementById("sum1UnRanked5x5Assists").innerHTML = 0;
        document.getElementById("sum1UnRanked5x5TurretKills").innerHTML = 0;
        document.getElementById("sum1UnRanked5x5Wins").innerHTML = 0;
    }
    else{
        document.getElementById("sum1UnRanked5x5MinionKills").innerHTML = summoner1Stats[4][1];
        document.getElementById("sum1UnRanked5x5ChampionKills").innerHTML = summoner1Stats[4][2];
        document.getElementById("sum1UnRanked5x5Assists").innerHTML = summoner1Stats[4][3];
        document.getElementById("sum1UnRanked5x5TurretKills").innerHTML = summoner1Stats[4][4];
        document.getElementById("sum1UnRanked5x5Wins").innerHTML = summoner1Stats[4][5];
    }

    if (summoner2Stats[4] == null) {
        document.getElementById("sum2UnRanked5x5MinionKills").innerHTML = 0;
        document.getElementById("sum2UnRanked5x5ChampionKills").innerHTML = 0;
        document.getElementById("sum2UnRanked5x5Assists").innerHTML = 0;
        document.getElementById("sum2UnRanked5x5TurretKills").innerHTML = 0;
        document.getElementById("sum2UnRanked5x5Wins").innerHTML = 0;
    }
    else{
        document.getElementById("sum2UnRanked5x5MinionKills").innerHTML = summoner2Stats[4][1];
        document.getElementById("sum2UnRanked5x5ChampionKills").innerHTML = summoner2Stats[4][2];
        document.getElementById("sum2UnRanked5x5Assists").innerHTML = summoner2Stats[4][3];
        document.getElementById("sum2UnRanked5x5TurretKills").innerHTML = summoner2Stats[4][4];
        document.getElementById("sum2UnRanked5x5Wins").innerHTML = summoner2Stats[4][5];
    }

    //ARAM Stats
    if (summoner1Stats[5] == null) {
        document.getElementById("sum1ARAMChampionKills").innerHTML = 0;
        document.getElementById("sum1ARAMAssists").innerHTML = 0;
        document.getElementById("sum1ARAMTurretKills").innerHTML = 0;
        document.getElementById("sum1ARAMWins").innerHTML = 0;
    }
    else{
        document.getElementById("sum1ARAMChampionKills").innerHTML = summoner1Stats[5][1];
        document.getElementById("sum1ARAMAssists").innerHTML = summoner1Stats[5][2];
        document.getElementById("sum1ARAMTurretKills").innerHTML = summoner1Stats[5][3];
        document.getElementById("sum1ARAMWins").innerHTML = summoner1Stats[5][4];
    }

    if (summoner2Stats[5] == null) {
        document.getElementById("sum2ARAMChampionKills").innerHTML = 0;
        document.getElementById("sum2ARAMAssists").innerHTML = 0;
        document.getElementById("sum2ARAMTurretKills").innerHTML = 0;
        document.getElementById("sum2ARAMWins").innerHTML = 0;
    }
    else{
        document.getElementById("sum2ARAMChampionKills").innerHTML = summoner2Stats[5][1];
        document.getElementById("sum2ARAMAssists").innerHTML = summoner2Stats[5][2];
        document.getElementById("sum2ARAMTurretKills").innerHTML = summoner2Stats[5][3];
        document.getElementById("sum2ARAMWins").innerHTML = summoner2Stats[5][4];
    }
}

//*getSummonerId* - A function for getting and returning the Summoner ID for a particular Summoner Name
function getSummonerId(summonerName){
    var ID;

    //The JSON value for a summoner name has white spaces removed and is lower case.
    //Example: Lieutenant Labia => lieutenantlabia
    var summonerNameNoSpace = summonerName;
    summonerNameNoSpace = summonerNameNoSpace.replace(/\s/g, '');
    summonerNameNoSpace = summonerNameNoSpace.toLowerCase().trim();

    //A Synchronous AJAX call to receiving JSON from RIOT's API and receiving the ID for PARAM:summonerName
    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=' + DEV_KEY,
        type: 'GET',
        dataType: 'json',
        data: {},
        async: false,
        success: function(json){ ID = json[summonerNameNoSpace].id; },
        error: function(){ alert("Error obtaining the JSON for Summoner ID"); }
    });
    return ID;
}

//*getSummonerProfIconId* - A function for getting and returning the Summoner profile icon ID for a particular Summoner Name
function getSummonerProfIconId(summonerName){
    var profIconID;

    //The JSON value for a summoner name has white spaces removed and is lower case.
    //Example: Lieutenant Labia => lieutenantlabia
    var summonerNameNoSpace = summonerName;
    summonerNameNoSpace = summonerNameNoSpace.replace(/\s/g, '');
    summonerNameNoSpace = summonerNameNoSpace.toLowerCase().trim();

    //A Synchronous AJAX call to receiving JSON from RIOT's API and receiving the ID for PARAM:summonerName
    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + summonerName + '?api_key=' + DEV_KEY,
        type: 'GET',
        dataType: 'json',
        data: {},
        async: false,
        success: function(json){ profIconID = json[summonerNameNoSpace].profileIconId; },
        error: function(){ alert("Error obtaining the JSON for Summoner profile icon ID"); }
    });
    return profIconID;
}

//*getSummonerStats* - The function takes in a summonerID and returns an array with that summoners stats
//                   - The Array goes by:
//                   - [0] = Ranked Solo 5x5
//                   - [1] = Ranked Team 5x5
//                   - [2] = Unranked 3x3
//                   - [3] = URF
//                   - [4] = Unranked 5x5
//                   - [5] = ARAM
function getSummonerStats(summonerID){
    var summonerStats = [];

    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + summonerID+ '/summary?season=SEASON2015&api_key=' + DEV_KEY,
        type: 'GET',
        dataType: 'json',
        data: {},
        async: false,
        success: function(json){

            //Gather the stats of the summoner with various games.
            for(i = 0; i < json.playerStatSummaries.length; i++) {

                switch(json.playerStatSummaries[i].playerStatSummaryType) {

                    case "RankedSolo5x5":
                        var rankedSolo5v5Stats = json.playerStatSummaries[i];
                        summonerStats[0] = ["Ranked Solo 5v5",
                            rankedSolo5v5Stats.wins,
                            rankedSolo5v5Stats.losses];
                        break;

                    case "RankedTeam5x5":
                        var rankedTeam5v5Stats = json.playerStatSummaries[i];
                        summonerStats[1] = ["Ranked Team 5v5",
                            rankedTeam5v5Stats.wins,
                            rankedTeam5v5Stats.losses];
                        break;

                    case "Unranked3x3":
                        var unranked3v3Stats = json.playerStatSummaries[i];
                        if (unranked3v3Stats.aggregatedStats.totalChampionKills) {
                            summonerStats[2] = ["Unranked 3v3",
                                unranked3v3Stats.aggregatedStats.totalMinionKills,
                                unranked3v3Stats.aggregatedStats.totalChampionKills,
                                unranked3v3Stats.aggregatedStats.totalAssists,
                                unranked3v3Stats.aggregatedStats.totalTurretsKilled,
                                unranked3v3Stats.wins
                            ];
                        }
                        else{ summonerStats[2] = ["UnRanked 3v3",0,0,0,0,0];}
                        break;

                    case "URF":
                        var URFStats = json.playerStatSummaries[i];
                        if(URFStats.aggregatedStats.totalChampionKills) {
                            summonerStats[3] = ["URF",
                                URFStats.aggregatedStats.totalMinionKills,
                                URFStats.aggregatedStats.totalChampionKills,
                                URFStats.aggregatedStats.totalTurretsKilled,
                                URFStats.aggregatedStats.totalAssists,
                                URFStats.wins
                            ];
                        }
                        else{ summonerStats[3] = ["URF",0,0,0,0,0];}
                        break;

                    case "Unranked":
                        var Unranked5v5Stats = json.playerStatSummaries[i];
                        if(Unranked5v5Stats.aggregatedStats.totalChampionKills) {
                            summonerStats[4] = ["Unranked 5v5",
                                Unranked5v5Stats.aggregatedStats.totalMinionKills,
                                Unranked5v5Stats.aggregatedStats.totalChampionKills,
                                Unranked5v5Stats.aggregatedStats.totalTurretsKilled,
                                Unranked5v5Stats.aggregatedStats.totalAssists,
                                Unranked5v5Stats.wins
                            ];
                        }
                        else{ summonerStats[4] = ["Unranked 5v5",0,0,0,0,0];}
                        break;

                    case "AramUnranked5x5":
                        var ARAMStats = json.playerStatSummaries[i];
                        if(ARAMStats.aggregatedStats.totalChampionKills) {
                            summonerStats[5] = ["ARAM",
                                ARAMStats.aggregatedStats.totalChampionKills,
                                ARAMStats.aggregatedStats.totalTurretsKilled,
                                ARAMStats.aggregatedStats.totalAssists,
                                ARAMStats.wins
                            ];
                            break;
                        }
                       else{ summonerStats[5] = ["ARAM",0,0,0,0];}
                }
            }
        },
        error: function(){ alert("Error obtaining the JSON for Summoner game stats"); }
    });

    return summonerStats;
}
