$(function(){
  function buildHTML(message) {
    let content = message.content ? `${ message.content }` : "";
    let img = message.image ? `<img src= ${ message.image }>` : "";
    let html = `<div class="message" data-id=${message.id}>
      <div class="message__upper-info">
        <div class="message__upper-info__user-name">
          ${message.user_name}
        </div>
        <div class="message__upper-info__data">
          ${message.time}
        </div>
      </div>
      <div class="message__text">
        <p class="lower-message__content">
          ${content}
        </p>
          ${img}
      </div>
    </div>`
    
  return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.submit__btn').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    });
  });
  let reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      let last_message_id = $('.message:last').data('message-id');
      let group_id = $('.main-header').data('group-id');
      $.ajax({
        url: `/groups/${group_id}/api/messages`,
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        let insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
        }); 
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function() {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 7000);
  });