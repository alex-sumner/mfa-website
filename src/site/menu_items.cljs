(ns site.menu-items
  (:require [site.router :as router]))

(def tunes
  {:treble-clef {:title "Treble Clef"
                 :ref :treble-clef
                 :links [{:ref "/tunes/treble/BarrowburnReel.pdf" :text "Barrowburn Reel"}
                         {:ref "/tunes/treble/BonnyKate.pdf" :text "Bonny Kate"}
                         {:ref "/tunes/treble/CradleSong.pdf" :text "Cradle Song"}
                         {:ref "/tunes/treble/EaglesWhistle.pdf" :text "Eagles Whistle"}
                         {:ref "/tunes/treble/FabuMazurka.pdf" :text "Fabu Mazurka"}
                         {:ref "/tunes/treble/FairyDance.pdf" :text "Fairy Dance"}
                         {:ref "/tunes/treble/GoAndListForASailor.pdf" :text "Go and List for a Sailor"}
                         {:ref "/tunes/treble/JumpAtTheSun.pdf" :text "Jump at the Sun"}
                         {:ref "/tunes/treble/KingOfTheFairies.pdf" :text "King of the Fairies"}
                         {:ref "/tunes/treble/LucyFarr.pdf" :text "Lucy Farr"}
                         {:ref "/tunes/treble/MaidsOfMitchelstown.pdf" :text "Maids of Mitchelstown"}
                         {:ref "/tunes/treble/MishiesJig.pdf" :text "Mishie's Jig"}
                         {:ref "/tunes/treble/MonasDelight.pdf" :text "Mona's Delight"}
                         {:ref "/tunes/treble/MontgomeryBellWaltz.pdf" :text "Montgomery Bell Waltz"}
                         {:ref "/tunes/treble/MrAndMrsMclean.pdf" :text "Mr And Mrs Mclean of Snaigow"}
                         {:ref "/tunes/treble/NotForJoe.pdf" :text "Not For Joe"}
                         {:ref "/tunes/treble/ParsonsFarewell.pdf" :text "Parson's Farewell"}
                         {:ref "/tunes/treble/PuttingOnTheRitz.pdf" :text "Putting on the Ritz"}
                         {:ref "/tunes/treble/RorysWaltz.pdf" :text "Rory's Waltz"}
                         {:ref "/tunes/treble/ShepherdsHey.pdf" :text "Shepherd's Hey"}
                         {:ref "/tunes/treble/SleepSoond.pdf" :text "Sleep Soond in da Moarnin"}
                         {:ref "/tunes/treble/SpanishTune.pdf" :text "Spanish Tune"}
                         {:ref "/tunes/treble/StatenIsland.pdf" :text "Staten Island"}
                         {:ref "/tunes/treble/TripToCartmel.pdf" :text "Trip to Cartmel"}
                         {:ref "/tunes/treble/TripToPakistan.pdf" :text "Trip to Pakistan"}]}
   :bass-clef {:title "Bass Clef"
               :ref :bass-clef
               :links [{:ref "/tunes/bass/BonnyKateBass.pdf" :text "Bonny Kate"}
                       {:ref "/tunes/bass/GoAndListBass.pdf" :text "Go and List for a Sailor"}
                       {:ref "/tunes/bass/SleepSoondBass.pdf" :text "Sleep Soond in da Moarnin"}
                       {:ref "/tunes/bass/TripToPakistanBass.pdf" :text "Trip to Pakistan"}]}
   :b-flat {:title "Treble Clef - B Flat"
            :ref :b-flat
            :links [{:ref "/tunes/b-flat/ChanterBb.pdf" :text "Chanter"}
                    {:ref "/tunes/b-flat/EmWaltzBb.pdf" :text "E Minor Waltz"}
                    {:ref "/tunes/b-flat/GoAndListBb.pdf" :text "Go and List for a Sailor"}]}})

(def items  {:home {:id :home
                    :ico :home
                    :text "Home"
                    :caption "Welcome to our website"
                    :description "Music For All is a community project based in Lancashire which aims to make musical activities accessible to everyone."
                    :ref (router/path-for :home)}
             :music-group {:id :music-group
                           :ico :music-group
                           :text "Music Group"
                           :caption "Monday night sessions"
                           :description "Any instrument is welcome to this session, and players of any age, experience and ability are all welcome and catered for."
                           :ref (router/path-for :music-group)}
             :instrument-loan {:id :instrument-loan
                               :ico :instrument-loan
                               :text "Instrument Loan"
                               :caption "Borrow an instrument"
                               :description "We run a free instrument loan scheme giving people the chance to play a wide variety of instruments ranging from cellos to glockenspiels."
                               :ref (router/path-for :instrument-loan)}
             :strings-in-schools {:id :strings-in-schools
                                  :ico :strings-in-schools
                                  :text "Strings in Schools"
                                  :caption "Strings in schools program"
                                  :description "We have found some great violin and cello teachers who have set up lessons during and after school hours."
                                  :ref (router/path-for :strings-in-schools)}
             :sheet-music {:id :sheet-music
                           :ico :sheet-music
                           :text "Sheet Music"
                           :caption "Download sheet music"
                           :description "For those who prefer to read from written music, here's a selection of tunes we often play."
                           :ref (router/path-for :sheet-music)
                           :tunes tunes}
             :soundcloud {:id :soundcloud
                          :ico :soundcloud
                          :text "SoundCloud"
                          :caption "Listen to session tunes"
                          :description "If you want to practise playing along, you can find recordings of some of the tunes we regularly play here" 
                          :ref (router/path-for :soundcloud)
                          :links [{:ref "https://soundcloud.com/user-648027280"
                                   :text "SoundCloud"}]}
             :facebook {:id :facebook
                        :ico :facebook
                        :text "Facebook"
                        :description "You can also follow us on Facebook, where in normal times details of upcoming events are posted."
                        :caption "Visit our Facebook page"
                        :ref (router/path-for :facebook)
                        :links [{:ref "https://www.facebook.com/MFABrinscall"
                                 :text "Facebook"}]}})

