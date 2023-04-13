function buttonclick(n){
    document.getElementById("screen").value+=n
}
function cleardisiplay()
{
    document.getElementById("screen").value=""
}
function equals()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result

}
function back()
{
    var bak=document.getElementById("screen").value
    bak=bak.slice(0,-1)
    document.getElementById("screen").value=bak
}