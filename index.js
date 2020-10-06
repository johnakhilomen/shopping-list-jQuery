function addItem(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        console.log("Hello World");
        const entryItem=$('#shopping-list-entry').val()
        const liItem=`<li>
        <span class="shopping-item" data-id=${cuid()}>${entryItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
      $('.shopping-list').append(liItem)
      checkItem();
      deleteItem();
    })
}

function getSpanId(spanElement)
{
  return spanElement.closest('li').children('span').data("id") 
}

function uncheckItem(button, spanId)
{
  button.closest('button').text("Uncheck");
  button.click(function ()
  {
    $(".shopping-item-toggle").closest('li').find(`span[data-id='${spanId}']`).removeClass("shopping-item__checked")
    $(this).closest('button').text("check");
    checkItem();
  }) 
}

function checkItem(){
  $(".shopping-item-toggle").click(function (event) {
    let spanId = getSpanId($(this));
    $(this).closest('li').find(`span[data-id='${spanId}']`).addClass("shopping-item__checked");
    uncheckItem($(this), spanId);
   
})
}

function deleteItem()
{
  $(".shopping-item-delete").click(function(){
    $(this).closest('li').remove();
  });
 
}

function init(){
    addItem();
    checkItem();
    deleteItem();
}    

$(init);



