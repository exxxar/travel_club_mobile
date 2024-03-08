<template>
    <ValidationProvider :name="field_name" :rules="rules" v-slot="{ errors }" tag="div" class="tc-input__wrapper"
                        :vid="name">
        <div class="tc-wrapper w-100" v-if="label||status">
            <label :for="name" class="tc-input__label" v-if="label" :class="label_class" v-html="label"></label>
            <slot name="status" v-if="status">
                <label :for="name" class="tc-input__label" :class="status_class">{{ status }}</label>
            </slot>
        </div>
        <daterange-picker
            ref="picker"
            v-model="dateRange"
            :opens="opens"
            :locale-data="local_data"
            :minDate="minDate" :maxDate="maxDate"
            :timePicker="timePicker"
            :timePickerIncrement="timePickerIncrement"
            :timePicker24Hour="timePicker24Hour"
            :timePickerSeconds="timePickerSeconds"
            :showWeekNumbers="showWeekNumbers"
            :showDropdowns="showDropdowns"
            :singleDatePicker="singleDatePicker"
            :ranges="false"
            :auto-apply="autoApply"
            :linkedCalendars="true"
            :controlContainerClass="'tc-input__group'"
            class="w-100"
            :disabled="disabled"
            @update="handleInput"
        >
<!--            <div slot="header" slot-scope="header" class="slot">-->
<!--                <div class="row w-100 m-auto" v-if="!autoApply">-->
<!--                    <div class="col-12">-->
<!--                        <div class="tc-wrapper tc-gap-small m-auto w-100 justify-content-end">-->
<!--                            <base-button @click="header.clickCancel" class="float-right" link>-->
<!--                                        <span style="font-size: 10px; border-bottom: 2px solid #d93030">-->
<!--                                            Сбросить-->
<!--                                        </span>-->
<!--                            </base-button>-->
<!--                            <base-button @click="header.clickApply" class="float-right">-->
<!--                                        <span style="font-size: 10px; border-bottom: 2px solid #7224f2">-->
<!--                                            Подтвердить-->
<!--                                        </span>-->
<!--                            </base-button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="col-12" style="border-top: 1px solid #ced4da" v-if="singleDatePicker">-->
<!--                        <div class="sdm-primary-text py-3 px-2">Выбранный период: <span style="color:#7224f2">{{rangeText(header.rangeText)}}</span>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            <template v-slot:input="picker">
                <!--            <div class="row w-100 h-100 m-auto align-items-center justify-content-center">-->
                <!--                <div class="col-11 p-0 text-truncate" style="font-size: 12px">-->
                <!--                    <span style="color: #7224f2">{{ picker.startDate | moment('DD.MM.YYYY')}}</span>-->
                <!--                    {{ picker.startDate | moment('HH:mm:ss')}}  - -->
                <!--                    <span style="color: #7224f2">{{ picker.endDate | moment('DD.MM.YYYY')}}</span> {{ picker.endDate | moment('HH:mm:ss')}}-->
                <!--                </div>-->
                <!--                <div class="col-1 pr-0">-->
                <!--                    <svg class="float-right" height="15px" viewBox="0 0 512 512" width="15px" xmlns="http://www.w3.org/2000/svg">-->
                <!--                        <path fill="#7224f2" d="m448 64h-21.332031v-42.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031h-21.332031c-11.777344 0-21.332031 9.558594-21.332031 21.332031v42.667969h-213.335938v-42.667969c0-11.773437-9.554687-21.332031-21.332031-21.332031h-21.332031c-11.777344 0-21.335938 9.558594-21.335938 21.332031v42.667969h-21.332031c-35.285156 0-64 28.714844-64 64v320c0 35.285156 28.714844 64 64 64h384c35.285156 0 64-28.714844 64-64v-320c0-35.285156-28.714844-64-64-64zm21.332031 384c0 11.753906-9.578125 21.332031-21.332031 21.332031h-384c-11.753906 0-21.332031-9.578125-21.332031-21.332031v-233.8125h426.664062zm0 0"/>-->
                <!--                    </svg>-->
                <!--                </div>-->
                <!--            </div>-->

                <slot name="group-text">
                </slot>
                <input class="tc-input" type="text" :value="rangeText(picker.rangeText)" readonly
                       placeholder="Введите дату публикации"/>
                <slot name="group-item">
                    <div class="tc-input__group-item">
                        <slot name="group-item-inner">
                            <div class="tc-input__icon">
                                <slot name="icon">
                                    <base-icon name="Calendar" color="secondary"/>
                                </slot>
                            </div>
                        </slot>
                    </div>
                </slot>
                <!--            </div>-->
            </template>
            <template #ranges="{startDate, endDate, ranges, clickRange}"></template>
<!--            <div slot="footer" slot-scope="data" class="slot">-->
<!--            </div>-->
        </daterange-picker>
        <slot name="subtitle">
            <!--            <p class="tc-input__label tc-text-neutral" v-if="subtitle">{{subtitle}}</p>-->
        </slot>
        <slot name="errors">
            <!--            <p class="tc-input-error" :class="errors_class" v-if="errors.length>0 && !no_errors">{{errors[0]}}</p>-->
        </slot>
    </ValidationProvider>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "BaseDaterangePicker",
        props: {
            value: {

            },
            name: {
                type: String,
                required: true,
            },
            label: {
                type: String,
            },
            subtitle: {
                type: String,
            },
            label_class: {
                type: String,
            },
            field_name: {
                type: String,
                default: function () {
                    let field_label = this.label;
                    if (!this.label) {
                        field_label = this.name;
                    }
                    return field_label;
                }
            },
            status: {
                type: String,
            },
            status_class: {
                type: String,
            },
            rules: {
                type: String,
                default: "",
            },
            disabled: {
                type: Boolean,
                default: false
            },
            opens: {
                type: String,
                default: 'center'
            },
            /**
             * minimum date allowed to be selected
             * @default null
             */
            minDate: {
                type: [String, Date],
                default () {
                    return null
                }
            },
            /**
             * maximum date allowed to be selected
             * @default null
             */
            maxDate: {
                type: [String, Date],
                default () {
                    return null
                }
            },
            /**
             * Show the week numbers on the left side of the calendar
             */
            showWeekNumbers: {
                type: Boolean,
                default: false,
            },
            /**
             * Each calendar has separate navigation when this is false
             */
            linkedCalendars: {
                type: Boolean,
                default: true,
            },
            /**
             * Only show a single calendar, with or without ranges.
             *
             * Set true or 'single' for a single calendar with no ranges, single dates only.
             * Set 'range' for a single calendar WITH ranges.
             * Set false for a double calendar with ranges.
             */
            singleDatePicker: {
                type: [Boolean, String],
                default: false,
            },
            /**
             * Show the dropdowns for month and year selection above the calendars
             */
            showDropdowns: {
                type: Boolean,
                default: false,
            },
            /**
             * Show the dropdowns for time (hour/minute) selection below the calendars
             */
            timePicker: {
                type: Boolean,
                default: false,
            },
            /**
             * Determines the increment of minutes in the minute dropdown
             */
            timePickerIncrement: {
                type: Number,
                default: 5,
            },
            /**
             * Use 24h format for the time
             */
            timePicker24Hour: {
                type: Boolean,
                default: true,
            },
            /**
             * Allows you to select seconds except hour/minute
             */
            timePickerSeconds: {
                type: Boolean,
                default: false,
            },
            /**
             * Auto apply selected range. If false you need to click an apply button
             */
            autoApply: {
                type: Boolean,
                default: false,
            },
            /**
             * If set to false and one of the predefined ranges is selected then calendars are hidden.
             * If no range is selected or you have clicked the "Custom ranges" then the calendars are shown.
             */
            alwaysShowCalendars: {
                type: Boolean,
                default: true
            },
        },
        model: {
            prop: 'value',
            event: 'input'
        },
        data() {
            let startDate = new Date();
            let endDate = new Date();
            startDate.setDate(endDate.getDate() - 6);
            return {
                data: [],
                dateRange: { startDate, endDate },
                local_data: {
                    format:'mm/dd/yyyy HH:MM',
                    separator: " - ",
                    applyLabel: "Подтвердить",
                    cancelLabel: "Сбросить",
                    daysOfWeek: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
                    monthNames: [
                        "Янв",
                        "Февр",
                        "Март",
                        "Апр",
                        "Май",
                        "Июнь",
                        "Июль",
                        "Авг",
                        "Сент",
                        "Окт",
                        "Нояб",
                        "Дек"
                    ],
                    firstDay: 1
                },
                loading:false,
            };
        },
        mounted() {
            if(!this.value) {
                this.dateRange = { startDate: null, endDate: null}
            }
        },
        computed: {
            model: {
                get() {
                    console.log('value',  this.value)
                    if(this.value===null) {
                        this.dateRange = { startDate: null, endDate: null}
                    }
                    console.log('dateRange',  this.dateRange)
                    return this.value;
                },
                set(value) {
                    this.$emit("input", value);
                },
            },
        },
        methods: {
            rangeText(range) {
                if(range) {
                    let text = range.split(' - ');
                    let format = "DD MMMM YYYY";
                    if(this.timePicker) {
                        format += ' HH:mm';
                        if(this.timePickerSeconds) {
                            format += ':ss';
                        }
                    }
                    text = moment(text[0]).format(format);
                    if(!this.singleDatePicker || this.singleDatePicker==='range')
                    {
                        text += ' - ' + moment(text[1]).format(format);
                    }

                    return text;
                }
               return '';
            },
            handleInput(value) {
                if(!this.singleDatePicker || this.singleDatePicker==='range')
                {
                    this.model = value;
                }
                else {
                    this.model = moment(value.startDate);
                }
            }
        }
    }
</script>

<style scoped>

</style>
