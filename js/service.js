var Service = {};
Service.baseURL = "http://testat.17m3cdn.com/17m3/index.php";
Service.zhuxiaoURL = "http://testat.17m3cdn.com/17m3/index.php?c=mmzc&m=loginout&d=y2017";
Service.bindingArea = function (areaid, fun) {
  // $.ajax({

  //   url: Service.baseURL + "?c=mmzc&m=roleconfirm&d=y2017",
  //   type: "GET",
  //   dataType: "json",
  //   data: {
  //     "areaid": areaid
  //   },
  //   success: fun
  // })
}

Service.QueryName = function (areaid, fun) {
  // $.ajax({

  //   url: Service.baseURL + "?c=mmzc&m=queryrole&d=y2017",
  //   type: "GET",
  //   dataType: "json",
  //   data: {
  //     "areaid": areaid
  //   },
  //   success: fun
  // })
}
Service.init = function (fun) {
  // $.ajax({

  //   url: Service.baseURL + "?c=mmzc&m=init&d=y2017",
  //   type: "GET",
  //   dataType: "json",
  //   success: fun
  // })
}
Service.startGame = function (fun) {
  // $.ajax({

  //   url: Service.baseURL + "?c=mmzc&m=showprz&d=y2017",
  //   type: "GET",
  //   dataType: "json",
  //   success: fun
  // })
}
Service.getBox = function (fun) {
  // $.ajax({

  //   url: Service.baseURL + "?c=mmzc&m=pickchest&d=y2017",
  //   type: "GET",
  //   dataType: "json",
  //   success: fun
  // })
}
Service.gameover = function (gameid, score, fun) {
  // $.ajax({

  //   url: "http://testat.17m3cdn.com/advstat/index.php?c=h5rank&m=wxgamelog&d=h5game",
  //   type: "GET",
  //   dataType: "json",
  //   data: {
  //     "gameid": gameid,
  //     "score": score,
  //     "key": hex_md5(numid.toString() + score.toString() + "ba46a2015defcfba9311fc")
  //   },
  //   success: fun
  // })
}
window.Service = Service;