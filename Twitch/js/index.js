var users = [
  'justin', 
  'syndicate', 
  'riotgames', 
  'captainsparklez', 
  'LIRIK', 
  'PhantomL0rd', 
  'esl_csgo', 
  'sodapoppin',
  'summit1g',
  'Nightblue3',
  'goldglove',
  'tsm_bjergsen',
  'imaqtpie',
  'tsm_theoddone',
  'trick2g'
];
var status;

function appendUser(icon, name, status, link, info) {
  var user = document.createElement('li');
  user.className = 'user';

  var userIcon = document.createElement('img');
  userIcon.className = 'user-icon';
  userIcon.setAttribute('src', icon);
  user.appendChild(userIcon);
  $(userIcon).wrap('<a href="' + link + '"></a>');

  var userName = document.createElement('p');
  userName.className = 'user-name';
  userName.innerHTML = '<a href="' + link + '">' + name + '</a>';
  user.appendChild(userName);

  var userStatus = document.createElement('span');
  userStatus.className = 'user-status';
  userStatus.innerHTML = '<i class="' + status + '"></i>';
  user.appendChild(userStatus);

  if (info !== undefined) {
    var userInfo = document.createElement('p');
    userInfo.className = 'user-info';
    if (info.length >= 50) {
      userInfo.innerHTML = '<a href="' + link + '" style="color: grey;">' + info.substring(0, 47) + '...</a>';
    } else {
      userInfo.innerHTML = '<a href="' + link + '" style="color: grey;">' + info + '</a>';
    }
    user.appendChild(userInfo);
  }
  $('ul').append(user);
}

$(document).ready(function () {
  
  users.forEach(function(user) {
    $.get('https://api.twitch.tv/kraken/channels/' + user, function(callback) {
      if (callback.error !== "Not Found") {
        if (callback.logo === null) {
          callback.logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
        }
        var link = 'https://twitch.tv/' + user;
        $.get('https://api.twitch.tv/kraken/streams/' + user, function(nextCallback) {
          if (nextCallback.stream === null) {
            status = 'fa fa-exclamation';
            appendUser(callback.logo, callback.display_name, status, link);
          } else {
            status = 'fa fa-twitch';
            appendUser(callback.logo, callback.display_name, status, link, callback.status);
          }
        }, 'jsonp');
      }
    }, 'jsonp');
  });
  
  $('td').on('click', function() {
    $('td').removeClass('active');
    $(this).addClass('active');
    var button = $(this).attr('id');
    if (button === 'all') {
      $('li').show();
    } else if (button === 'online') {
      $('.fa-exclamation').parent().parent().hide();
      $('.fa-twitch').parent().parent().show();
    } else {
      $('.fa-exclamation').parent().parent().show();
      $('.fa-twitch').parent().parent().hide();
    }
  });
  
  $('input').keyup(function() {
    var searchBar = $(this).val();
    $('li').each(function() {
      var entered = $(this).text().toLowerCase();
      if (entered.indexOf(searchBar) >= 0) {
        $(this).show()
      } else {
        $(this).hide();
      }
    });
  });

});