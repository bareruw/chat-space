$(function(){
  function buildHTML(message) {
    let content = message.content ? `${ message.content }` : "";
    let img = message.image ? `<img src= ${ message.image }>` : "";
    let html = `<div class="message">
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
});