goog.provide('game.core');
goog.require('cljs.core');
goog.require('reagent.core');
game.core.initial_owners = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null], null);
game.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"owners","owners",1019390468),game.core.initial_owners,new cljs.core.Keyword(null,"turn","turn",75759344),"X"], null));
game.core.place_owner = (function game$core$place_owner(p){
var fexpr__34848 = new cljs.core.Keyword(null,"owners","owners",1019390468).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game.core.state));
return (fexpr__34848.cljs$core$IFn$_invoke$arity$1 ? fexpr__34848.cljs$core$IFn$_invoke$arity$1(p) : fexpr__34848.call(null,p));
});
game.core.line_owner = (function game$core$line_owner(p__34852){
var vec__34854 = p__34852;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34854,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34854,(1),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34854,(2),null);
var owner1 = game.core.place_owner(p1);
var owner2 = game.core.place_owner(p2);
var owner3 = game.core.place_owner(p3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(owner1,owner2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([owner3], 0))){
return owner1;
} else {
return null;
}
});
game.core.winner = (function game$core$winner(){
var possible_lines = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34862_SHARP_,p2__34861_SHARP_){
var temp__5735__auto__ = game.core.line_owner(p2__34861_SHARP_);
if(cljs.core.truth_(temp__5735__auto__)){
var winning_player = temp__5735__auto__;
return cljs.core.reduced(winning_player);
} else {
return null;
}
}),null,possible_lines);
});
game.core.game_over = (function game$core$game_over(){
var or__4185__auto__ = game.core.winner();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.every_QMARK_(game.core.place_owner,cljs.core.range.cljs$core$IFn$_invoke$arity$1((9)));
}
});
game.core.new_owner = (function game$core$new_owner(){
return new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game.core.state));
});
game.core.new_turn = (function game$core$new_turn(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game.core.state)),"X")){
return "O";
} else {
return "X";
}
});
game.core.reset_owners = (function game$core$reset_owners(){
return game.core.initial_owners;
});
game.core.handle_turn = (function game$core$handle_turn(i){
if(cljs.core.truth_(game.core.game_over())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(game.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owners","owners",1019390468)], null),game.core.reset_owners);
} else {
}

if(cljs.core.truth_(game.core.place_owner(i))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(game.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owners","owners",1019390468),i], null),game.core.new_owner);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(game.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344)], null),game.core.new_turn);
}
});
game.core.square = (function game$core$square(i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.square","button.square",-355523450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return game.core.handle_turn(i);
})], null),(function (){var fexpr__34887 = new cljs.core.Keyword(null,"owners","owners",1019390468).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game.core.state));
return (fexpr__34887.cljs$core$IFn$_invoke$arity$1 ? fexpr__34887.cljs$core$IFn$_invoke$arity$1(i) : fexpr__34887.call(null,i));
})()], null);
});
game.core.get_status = (function game$core$get_status(){
if(cljs.core.truth_(game.core.game_over())){
var winning_player = game.core.winner();
if(cljs.core.truth_(winning_player)){
return ["Winner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(winning_player)].join('');
} else {
return "Draw";
}
} else {
return ["Next player: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(game.core.state)))].join('');
}
});
game.core.board = (function game$core$board(){
var status = game.core.get_status();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status","div.status",246710893),status], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(2)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(5)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.square,(8)], null)], null)], null);
});
game.core.game = (function game$core$game(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-board","div.game-board",1833032215),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.board], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-info","div.game-info",-605893819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051)], null)], null)], null);
});
goog.exportSymbol('game.core.game', game.core.game);
game.core.start = (function game$core$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.core.game], null),document.getElementById("app"));
});
game.core.init = (function game$core$init(){
return game.core.start();
});

//# sourceMappingURL=game.core.js.map
