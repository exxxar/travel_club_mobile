<template>
  <div style="height: 100%;">
<!--    Flights-->
      <div v-html="form"></div>
<!--      <div class="container layout-content">-->
<!--          <form class="flight-index-form index-form is-not-date-select">-->
<!--              <div class="trip-control-wrap">-->
<!--                  <div id="inputs" class="inputs-block">-->
<!--                      <div id="form" class="form">-->
<!--                          <table class="inputs" id="form-table">-->
<!--                              <tbody>-->
<!--                              <tr data-row-index="0" class="">-->
<!--                                  <td class="start step1">-->
<!--                                      <div class="point"></div>-->
<!--                                  </td>-->
<!--                                  <td class="input">-->
<!--                                      <div class="country-field u-field -default-index-theme -large -is-empty">-->
<!--                                          <div class="u-control">-->
<!--                                              <input type="text" class="u-input" placeholder="откуда" autocomplete="off" maxlength="30" value="">-->
<!--                                              <div class="u-tip">например:-->
<!--                                                  <span class="u-example">Красноярск</span>,-->
<!--                                                  <span class="u-example">Москва</span>,-->
<!--                                                  <span class="u-example">Хельсинки</span>-->
<!--                                              </div>-->
<!--                                          </div>-->
<!--                                      </div>-->
<!--                                  </td>-->
<!--                              </tr>-->
<!--                              <tr data-row-index="1">-->
<!--                                  <td id="date1" class="date-cell" colspan="2">-->
<!--                                      <div class="date-field u-field -default-index-theme &#45;&#45;colored-1 -is-empty">-->
<!--                                          <div class="u-control">-->
<!--                                              <input type="text" autocomplete="off" spellcheck="false" class="u-input" value="когда">-->
<!--                                          </div>-->
<!--                                      </div>-->
<!--                                  </td>-->
<!--                              </tr>-->
<!--                              <tr data-row-index="1" class="one_way">-->
<!--                                  <td class="middle"><div class="point">-->
<!--                                      <svg viewBox="0 0 30 18" width="30" height="18">-->
<!--                                          <path d="M17.6,16.9c-0.7,0.7-1.7,0.9-2.6,0.7c-0.9,0.2-1.9,0-2.6-0.7L0.9,5.1c-1.1-1.2-1.1-3,0-4.2c1.1-1.2,3-1.2,4.1,0l7.1,7.3l0,0h5.8l0,0L25,0.9c1.1-1.2,3-1.2,4.1,0c1.1,1.2,1.1,3.1,0,4.2L17.6,16.9z"></path>-->
<!--                                      </svg>-->
<!--                                  </div>-->
<!--                                  </td>-->
<!--                                  <td class="input">-->
<!--                                      <div class="country-field u-field -default-index-theme -large -is-empty">-->
<!--                                          <div class="u-control">-->
<!--                                              <input type="text" class="u-input" placeholder="куда" autocomplete="off" maxlength="30" value="">-->
<!--                                              <div class="u-tip">например:-->
<!--                                                  <span class="u-example">Владивосток</span>,-->
<!--                                                  <span class="u-example">Самара</span>,-->
<!--                                                  <span class="u-example">Екатеринбург</span>-->
<!--                                              </div>-->
<!--                                          </div>-->
<!--                                      </div>-->
<!--                                  </td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                          </table>-->
<!--                      </div>-->
<!--                      <div id="add-remove-controls" class="add-remove-controls">-->
<!--                          <button type="button" class="actionstext control-return"><span>обратно</span></button><span class="continue">|</span>-->
<!--                          <button type="button" class="actionstext control-continue"><span>продолжить маршрут</span></button><span class="continue">|</span>-->
<!--                          <button type="button" class="actionstext control-break"><span>разомкнуть маршрут</span></button>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <div class="index-calendar -screen has-scroll" style="">-->
<!--                      <div class="touch-close"><span class="fontello-up"></span>-->
<!--                      </div>-->
<!--                      <div class="index-calendar-header">-->
<!--                          <table>-->
<!--                              <tbody>-->
<!--                              <tr>-->
<!--                                  <td>пн</td>-->
<!--                                  <td>вт</td>-->
<!--                                  <td>ср</td>-->
<!--                                  <td>чт</td>-->
<!--                                  <td>пт</td>-->
<!--                                  <td>сб</td>-->
<!--                                  <td>вс</td>-->
<!--                              </tr>-->
<!--                              </tbody>-->
<!--                          </table>-->
<!--                      </div>-->
<!--                      <div class="index-calendar-container">-->
<!--                          <div class="index-calendar-months scrollWidthless__scrollWidthless&#45;&#45;1pACz" style="margin-right:-100px;padding-right:100px">-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">мар</span>-->
<!--                                      <span class="full-month">март</span> &lt;!&ndash; &ndash;&gt;2020-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-22"><span>22</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-03-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-29"><span>29</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-03-30"><span>30</span></td>-->
<!--                                          <td class="day d0" data-date="2020-03-31"><span>31</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">апр</span>-->
<!--                                      <span class="full-month">апрель</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-05"><span>5</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-04-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-12"><span>12</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-04-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-19"><span>19</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-04-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-26"><span>26</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-04-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-04-30"><span>30</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">май</span>-->
<!--                                      <span class="full-month">май</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-03"><span>3</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-05-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-10"><span>10</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-05-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-17"><span>17</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-05-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-24"><span>24</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-05-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-30"><span>30</span></td>-->
<!--                                          <td class="day d0" data-date="2020-05-31"><span>31</span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">июн</span>-->
<!--                                      <span class="full-month">июнь</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-06-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-07"><span>7</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-06-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-14"><span>14</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-06-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-21"><span>21</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-06-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-28"><span>28</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-06-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-06-30"><span>30</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">июл</span>-->
<!--                                      <span class="full-month">июль</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-05"><span>5</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-07-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-12"><span>12</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-07-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-19"><span>19</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-07-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-26"><span>26</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-07-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-30"><span>30</span></td>-->
<!--                                          <td class="day d0" data-date="2020-07-31"><span>31</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">авг</span>-->
<!--                                      <span class="full-month">август</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-02"><span>2</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-08-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-09"><span>9</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-08-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-16"><span>16</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-08-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-23"><span>23</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-08-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-08-30"><span>30</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-08-31"><span>31</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">сен</span>-->
<!--                                      <span class="full-month">сентябрь</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-06"><span>6</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-09-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-13"><span>13</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-09-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-20"><span>20</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-09-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-27"><span>27</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-09-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-09-30"><span>30</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">окт</span>-->
<!--                                      <span class="full-month">октябрь</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-04"><span>4</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-10-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-11"><span>11</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-10-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-18"><span>18</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-10-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-25"><span>25</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-10-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-30"><span>30</span></td>-->
<!--                                          <td class="day d0" data-date="2020-10-31"><span>31</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">ноя</span>-->
<!--                                      <span class="full-month">ноябрь</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-01"><span>1</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-11-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-08"><span>8</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-11-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-15"><span>15</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-11-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-22"><span>22</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-11-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-11-29"><span>29</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-11-30"><span>30</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">дек</span>-->
<!--                                      <span class="full-month">декабрь</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-03"><span>3</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-06"><span>6</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-12-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-10"><span>10</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-13"><span>13</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-12-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-17"><span>17</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-20"><span>20</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-12-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-24"><span>24</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-27"><span>27</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2020-12-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-30"><span>30</span></td>-->
<!--                                          <td class="day d0" data-date="2020-12-31"><span>31</span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">янв</span>-->
<!--                                      <span class="full-month">январь</span> &lt;!&ndash; &ndash;&gt;2021-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day empty disabled"><span></span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-01"><span>1</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-02"><span>2</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-03"><span>3</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-01-04"><span>4</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-05"><span>5</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-06"><span>6</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-07"><span>7</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-08"><span>8</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-09"><span>9</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-10"><span>10</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-01-11"><span>11</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-12"><span>12</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-13"><span>13</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-14"><span>14</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-15"><span>15</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-16"><span>16</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-17"><span>17</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-01-18"><span>18</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-19"><span>19</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-20"><span>20</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-21"><span>21</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-22"><span>22</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-23"><span>23</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-24"><span>24</span></td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-01-25"><span>25</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-26"><span>26</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-27"><span>27</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-28"><span>28</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-29"><span>29</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-30"><span>30</span></td>-->
<!--                                          <td class="day d0" data-date="2021-01-31"><span>31</span></td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">фев</span>-->
<!--                                      <span class="full-month">февраль</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-02-01">-->
<!--                                              <span>1</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-02">-->
<!--                                              <span>2</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-03">-->
<!--                                              <span>3</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-04">-->
<!--                                              <span>4</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-05">-->
<!--                                              <span>5</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-06">-->
<!--                                              <span>6</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-07">-->
<!--                                              <span>7</span>-->
<!--                                          </td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-02-08">-->
<!--                                              <span>8</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-09">-->
<!--                                              <span>9</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-10">-->
<!--                                              <span>10</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-11">-->
<!--                                              <span>11</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-12">-->
<!--                                              <span>12</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-13">-->
<!--                                              <span>13</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-14">-->
<!--                                              <span>14</span>-->
<!--                                          </td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-02-15">-->
<!--                                              <span>15</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-16">-->
<!--                                              <span>16</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-17">-->
<!--                                              <span>17</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-18">-->
<!--                                              <span>18</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-19">-->
<!--                                              <span>19</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-20">-->
<!--                                              <span>20</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-21">-->
<!--                                              <span>21</span>-->
<!--                                          </td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-02-22">-->
<!--                                              <span>22</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-23">-->
<!--                                              <span>23</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-24">-->
<!--                                              <span>24</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-25">-->
<!--                                              <span>25</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-26">-->
<!--                                              <span>26</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-27">-->
<!--                                              <span>27</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-02-28">-->
<!--                                              <span>28</span>-->
<!--                                          </td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                              <div class="index-calendar-month">-->
<!--                                  <div class="index-calendar-month-name">-->
<!--                                      <span class="short-month">мар</span>-->
<!--                                      <span class="full-month">март</span>-->
<!--                                  </div>-->
<!--                                  <table>-->
<!--                                      <tbody>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-03-01">-->
<!--                                              <span>1</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-02">-->
<!--                                              <span>2</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-03">-->
<!--                                              <span>3</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-04">-->
<!--                                              <span>4</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-05">-->
<!--                                              <span>5</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-06">-->
<!--                                              <span>6</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-07">-->
<!--                                              <span>7</span>-->
<!--                                          </td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-03-08">-->
<!--                                              <span>8</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-09">-->
<!--                                              <span>9</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-10">-->
<!--                                              <span>10</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-11">-->
<!--                                              <span>11</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-12">-->
<!--                                              <span>12</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-13">-->
<!--                                              <span>13</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-14">-->
<!--                                              <span>14</span>-->
<!--                                          </td>-->
<!--                                      </tr>-->
<!--                                      <tr>-->
<!--                                          <td class="day d0" data-date="2021-03-15">-->
<!--                                              <span>15</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-16">-->
<!--                                              <span>16</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-17">-->
<!--                                              <span>17</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-18">-->
<!--                                              <span>18</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-19">-->
<!--                                              <span>19</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-20">-->
<!--                                              <span>20</span>-->
<!--                                          </td>-->
<!--                                          <td class="day d0" data-date="2021-03-21">-->
<!--                                              <span>21</span>-->
<!--                                          </td>-->
<!--                                      </tr>-->
<!--                                      </tbody>-->
<!--                                  </table>-->
<!--                              </div>-->
<!--                          </div>-->
<!--                      </div>-->
<!--                      <div class="index-calendar-error -empty"></div>-->
<!--                      <div class="index-calendar-arrow is-prev">-->
<!--                          <svg viewBox="0 0 44 13" width="44" height="13">-->
<!--                              <path d="M 0,12 L 22,1 44,12"></path>-->
<!--                          </svg>-->
<!--                      </div>-->
<!--                      <div class="index-calendar-arrow is-next">-->
<!--                          <svg viewBox="0 0 44 13" width="44" height="13">-->
<!--                              <path d="M 0,0 L 22,11 44,0"></path>-->
<!--                          </svg>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <div class="u-field class-block -default-index-theme">-->
<!--                      <div class="u-control">-->
<!--                          <button class="u-input" type="button" autocomplete="off">Эконом</button>-->
<!--                          <div class="u-icon u-icon-toggle -default"></div>-->
<!--                      </div>-->
<!--                  </div>-->
<!--                  <div id="index-form-persons" class="index-form-persons">-->
<!--                      <table>-->
<!--                          <tbody>-->
<!--                          <tr class="row-main">-->
<!--                              <td class="index-form-persons-selector selector-container">-->
<!--                                  <div class="person infant">-->
<!--                                      <svg viewBox="0 0 22 27" width="22" height="27">-->
<!--                                          <path d="M10.6,10c2.8,0,5-2.2,5-5s-2.2-5-5-5c-2.8,0-5,2.2-5,5S7.8,10,10.6,10z M19.3,21c0.9,0.7,1,1.9,0.2,2.7l-0.7,0.7c-0.1,0.1-0.3,0.3-0.5,0.4l-2.5,1.8c-0.9,0.7-2.1,0.6-2.9-0.3l-0.7-0.7c-0.7-0.9-0.7-1.9,0.1-2.5l0.6-0.5L12.5,22H9.3l-1,0.8L8.6,23c0.9,0.7,1.1,1.7,0.3,2.5l-0.6,0.7c-0.7,0.9-2,1-2.9,0.3L3.1,25c-0.2-0.1-0.3-0.2-0.5-0.3l-1.1-1c-0.8-0.8-0.8-1.9,0.1-2.6L5,19v-3l-4.3-3.1c-0.9-0.7-1-1.9-0.3-2.7l0.7-0.8c0.7-0.8,2-1,2.9-0.3L7.8,12h6.1l3.6-2.7c0.9-0.7,2.2-0.5,2.9,0.4l0.6,0.8c0.7,0.9,0.5,2.1-0.3,2.8L16,16v3L19.3,21L19.3,21z"></path>-->
<!--                                      </svg>-->
<!--                                  </div>-->
<!--                                  <div class="person child">-->
<!--                                      <svg viewBox="0 0 24 34" width="24" height="34">-->
<!--                                          <path d="M11,23v9c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2V17H2c-1.1,0-2-0.9-2-2v-1c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v1c0,1.1-0.9,2-2,2h-4v15c0,1.1-0.9,2-2,2h-1c-1.1,0-2-0.9-2-2v-9H11z M12,10c2.8,0,5-2.2,5-5s-2.2-5-5-5S7,2.2,7,5S9.2,10,12,10z"></path>-->
<!--                                      </svg>-->
<!--                                  </div>-->
<!--                                  <div class="person adult">-->
<!--                                      <svg viewBox="0 0 24 48" width="24" height="48">-->
<!--                                          <path d="M12,10c2.8,0,5-2.2,5-5s-2.2-5-5-5S7,2.2,7,5S9.2,10,12,10z M6,26v20c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V27h2v19c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V17h1v10c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V15c0-1.7-1.3-3-3-3H3c-1.7,0-3,1.3-3,3v12c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V17h1V26z"></path>-->
<!--                                      </svg>-->
<!--                                  </div>-->
<!--                                  <div class="arrow">-->
<!--                                      <svg viewBox="0 0 34.3 29" width="34.3" height="29">-->
<!--                                          <path d="M33.2,17L22.3,27.9c-1.4,1.4-3.6,1.5-5,0.2c-1.3-1.3-1.3-3.5,0.2-5l5.2-5.2H3.4c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h19.4l-5.2-5.2c-1.4-1.4-1.5-3.6-0.1-4.9c1.3-1.3,3.5-1.3,4.9,0.1l10.7,10.7c0,0,0.1,0.1,0.1,0.2l0.1,0.1C34.7,13.4,34.6,15.6,33.2,17z"></path>-->
<!--                                      </svg>-->
<!--                                  </div>-->
<!--                              </td>-->
<!--                              <td class="index-form-persons-selected selected-container">-->
<!--                                  <div class="person adult selected disabled">-->
<!--                                      <svg viewBox="0 0 24 48" width="24" height="48">-->
<!--                                          <path d="M12,10c2.8,0,5-2.2,5-5s-2.2-5-5-5S7,2.2,7,5S9.2,10,12,10z M6,26v20c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V27h2v19c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V17h1v10c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V15c0-1.7-1.3-3-3-3H3c-1.7,0-3,1.3-3,3v12c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2V17h1V26z"></path>-->
<!--                                      </svg>-->
<!--                                  </div>-->
<!--                              </td>-->
<!--                          </tr>-->
<!--                          <tr class="row-labels">-->
<!--                              <td class="index-form-persons-selector-label selector-container">Количество <br>пассажиров:</td>-->
<!--                              <td class="index-form-persons-selected-label selected-container">-->
<!--                                  <div class="selected-count">1 взрослый</div>-->
<!--                                  <div class="selected-tip"></div>-->
<!--                              </td>-->
<!--                          </tr>-->
<!--                          </tbody>-->
<!--                      </table>-->
<!--                  </div>-->
<!--                  <div class="FlightIndexForm__hotelsBlock&#45;&#45;1i_6U">-->
<!--                      <div data-test-id="checkbox" class="Field__field&#45;&#45;3qDyS Field__labelToPlaceholder&#45;&#45;11fFD Field__themeOldDark&#45;&#45;1dqMX">-->
<!--                          <label class="Checkbox__wrapper&#45;&#45;1YU0W Checkbox__themeOldDark&#45;&#45;b5p2F">-->
<!--                              <input type="checkbox" class="Checkbox__input&#45;&#45;27LJ3" checked="" data-test-id="checkbox&#45;&#45;input">-->
<!--                              <span class="Checkbox__label&#45;&#45;28jfO">Показать отели в новой вкладке</span>-->
<!--                          </label>-->
<!--                      </div>-->
<!--                  </div>-->
<!--              </div>-->
<!--              <button type="submit" id="button" class="button-block" tabindex="11">-->
<!--                  <span class="text">Найти</span>-->
<!--                  <div class="animated-arrow">-->
<!--                      <svg viewBox="0, 0, 48, 48" width="48" height="48">-->
<!--                          <path d="M24,0 L48,24 L24.06,47.94 L23.94,47.94 L19.77,43.77 L36.51,27 L0,27 L0,21 L36.51,21 L19.77,4.23 z"></path>-->
<!--                      </svg>-->
<!--                  </div>-->
<!--              </button>-->
<!--          </form>-->
<!--      </div>-->
  </div>
</template>

<script>
  export default {
    data: () => ({
     form:''
    }),
    mounted() {
        this.getOzonForm();
    },
    computed:
    {
      menu() {
        return this.$store.getters.menu
      },
    },
    methods:
    {
        getOzonForm(){
            axios.get('/getOzonForm').then((response) => {
                this.form = response.data;
            });
        }
    }
  }
</script>
