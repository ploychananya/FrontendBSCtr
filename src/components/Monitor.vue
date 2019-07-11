<template>
  <div class="monitor">
    <section class="hero is-info is-fullheight">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img alt="logo" src="../assets/logo.png" />
              </a>
              <!-- <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>-->
            </div>
            <!-- <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">Home</a>
                <a class="navbar-item">Examples</a>
                <a class="navbar-item">Documentation</a>
                <span class="navbar-item">
                  <a class="button is-info is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>-->
          </div>
        </nav>
      </div>

      <div class="hero-body is-fullheight">
        <div class="container">
          <p class="title"></p>
          <p class="subtitle"></p>

          <div>
            <b-button variant="warning" v-b-modal.modal-prevent-closing>submit</b-button>
          </div>

        <div class="mt-3">
            Submitted Names:
            <div v-if="submittedNames.length === 0">--</div>
            <ul v-else class="mb-0 pl-3">
                <li v-for="name in submittedNames">{{ name }}</li>
            </ul>
        </div>

        <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Submit Your Name"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
        >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                    :state="nameState"
                    label="Name"
                    label-for="name-input"
                    invalid-feedback="Name is required"
                >
                <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
                </b-form-group>
            </form>
        </b-modal>
        </div>



        <!-- start timesheet ######################################-->

        <div class="container">
       
        <div class="mb-4">
            <h2 class="mb-3">Header 1</h2> 
            <!-- <div class="alert alert-primary mb-3">
                <ul class="mb-0">
                    <li>Click on an event to move it.</li>
                    <li>Click on empty space of the timeline to add a new event on predefined position.</li>
                    <li>Use +- keys to change zooming level.</li>
                    <li>Use vertical mouse wheel to scroll timeline horizontally.</li>
                </ul>
            </div> -->
            <div class="mb-2" id="sked1"></div>     <!--üst model-->
            <!-- <small>  
                <span class="text-danger">*</span>
                To make the example lightweight the timezones in here
                are set disregarding the DST, so they may be different
                from the actual ones, that's ok.
            </small> -->
        </div> 
        
        <!-- <div class="mb-4">
            <h2 class="mb-3">Header 2</h2> 
            <div class="alert alert-primary mb-3">
                See the sources of this example to know how to initialize
                the component with its actual rendering postponed. Note
                that tzOffset = 0 in this example.
            </div>
            <div id="sked2"></div>
        </div> -->

        <div class="mb-4">
            <h2 class="mb-3"> Buttons </h2>
            <div class="my-4">
                <button class="btn btn-primary" data-toggle="modal" data-target="#modal1">
                    Show in modal
                </button>
            </div>
            <!-- <ul class="nav nav-tabs" id="nav1">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#empty-tab">Text</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#sked-tab">Schedule</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="empty-tab">
                    It's an initial tab, there is nothing here.<br>
                    Switch to the other tab.
                </div>
                <div class="tab-pane fade" id="sked-tab">
                    <div id="sked4"></div>
                </div>
            </div> -->
        </div>
    </div>
 
        <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>

        </div>
        </div>
    

    <!-- Button modal-->
    <div class="modal" tabindex="-1" role="dialog" id="modal1">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Some modal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="sked3"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- stop timesheet ######################################-->
    </div>

      <div class="hero-foot is-fullheight">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <b-button variant="danger" @click="makeToast('danger')" class="mb-2">Okay</b-button>

            <!-- <ul>
              <li class="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>-->
          </div>
        </nav>
      </div>
    </section>

    <!-- <ul class="nav nav-tabs" id="nav1">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#empty-tab">Text</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#sked-tab">Schedule</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane fade show active" id="empty-tab">
                    It's an initial tab, there is nothing here.<br>
                    Switch to the other tab.
                </div>
                <div class="tab-pane fade" id="sked-tab">
                    <div id="sked4"></div>
                </div>
            </div> 
    </div>-->

    <!-- Button modal
    <div class="modal" tabindex="-1" role="dialog" id="modal1">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Some modal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="sked3"></div>
                </div>
            </div>
    </div>-->
  </div>
</template>

<script>
export default {
    name: "Monitor",
    data() {
        return {
            Count: 0,
            name: "",
            nameState: null,
            submittedNames: [],
            locations : [
            { id: '1', name: 'Channel 1', tzOffset: 7 * 60 },
            { id: '2', name: 'Channel 2', tzOffset: -10 * 60 },
            { id: '3', name: 'Channel 3', tzOffset: 4 * 60 },
            { id: '4', name: 'Channel 4', tzOffset: -1 * 60 },
            { id: '5', name: 'Channel 5', tzOffset: -2 * 60 },
            { id: '6', name: 'Channel 6', tzOffset: -2 * 60 },
            ],
            events : [
                {
                    name: 'Recording 1',
                    location: '4',
                    start: this.today(4, 15),
                    end: this.today(7, 30)
                },
                {
                    name: 'Recording 2 (ovelapping)',
                    location: '4',
                    start: this.today(6, 30),
                    end: this.today(9, 15)
                },
                {
                    name: 'Recording 3 (ovelapping)',
                    location: '4',
                    start: this.today(9, 0),
                    end: this.today(11, 30)
                },
                {
                    name: 'Recording 4 (ovelapping)',
                    location: '4',
                    start: this.today(7, 45),
                    end: this.today(8, 30)
                },
                {
                    name: 'Recording 5 (ovelapping)',
                    location: '4',
                    start: this.today(8, 0),
                    end: this.today(8, 15)
                },
                {
                    name: 'Recording 6',
                    location: '1',
                    start: this.today(0, 0),
                    end: this.today(1, 30),
                    disabled: true
                },
                {
                    name: 'Recording 7',
                    location: '5',
                    start: this.today(0, 0),
                    end: this.today(1, 30)
                },
                {
                    name: 'Recording 8',
                    location: '1',
                    start: this.today(10, 0),
                    end: this.today(11, 30)
                },
                {
                    name: 'Recording 9',
                    location: '2',
                    start: this.yesterday(22, 0),
                    end: this.today(1, 30),
                    class: 'custom-class'
                },
                {
                    name: 'Recording 10',
                    location: '2',
                    start: this.today(1, 45),
                    end: this.today(2, 45),
                    class: 'custom-class'
                },
                {
                    name: 'Recording 11',
                    location: '2',
                    start: this.today(3, 10),
                    end: this.today(5, 30),
                    class: 'custom-class',
                    disabled: true
                },
                {
                    name: 'Disabled recording',
                    location: '3',
                    start: this.yesterday(22, 15),
                    end: this.yesterday(23, 30),
                    disabled: true
                },
                {
                    name: 'Recording 12',
                    location: '3',
                    start: this.yesterday(23, 45),
                    end: this.today(1, 30)
                },
                {
                    name: 'Recording 13',
                    location: '6',
                    start: this.yesterday(21, 45),
                    end: this.today(0, 45)
                },
                {
                    name: 'Last recording',
                    location: '5',
                    start: this.today(11, 15),
                    end: this.today(13, 45)
                }],
                // $sked1 : $('#sked1').skedTape({
                //     caption: 'Cities',
                //     start: yesterday(22, 0),
                //     end: today(12, 0),
                //     showEventTime: true,
                //     showEventDuration: true,
                //     scrollWithYWheel: true,
                //     locations: locations.slice(),
                //     events: events.slice(),
                //     maxTimeGapHi: 60 * 1000, // 1 minute
                //     minGapTimeBetween: 1 * 60 * 1000,
                //     snapToMins: 1,
                //     editMode: true,
                //     timeIndicatorSerifs: true,
                //     formatters: {
                //         date: function (date) {
                //             return $.fn.skedTape.format.date(date, 'l', '.');
                //         },
                //         duration: function (ms, opts) {
                //             return $.fn.skedTape.format.duration(ms, {
                //                 hrs: 'h',
                //                 min: 'min'
                //             });
                //         },
                // }
                // })



        }
    },
    methods: {
        makeToast(variant, append = false) {
        this.Count++;
        this.$bvToast.toast(`This is number ${this.Count}`, {
            title: "Warning",
            variant: variant,
            autoHideDelay: 5000,
            appendToast: append
        });
        },
        //start method popup here
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid ? "valid" : "invalid"
            return valid
        },
        resetModal() {
            this.name = ""
            this.nameState = null
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return;
            }
            // Push the name to submitted names
            this.submittedNames.push(this.name)
            // Hide the modal manually
            this.$nextTick(() => {
                this.$refs.modal.hide()
            })
        },
        today(hours, minutes) {
            var date = new Date();
            date.setHours(hours, minutes, 0, 0);
            return date;
        },
        yesterday(hours, minutes) {
            var date = this.today(hours, minutes);
            date.setTime(date.getTime() - 24 * 60 * 60 * 1000);
            return date;
        },
        tomorrow(hours, minutes) {
            var date = this.today(hours, minutes);
            date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
            return date;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logotoleft {
  padding-left: 0px;
  padding-right: 0px;
}
.hero {
  width: 100vw;
  height: 100vh;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>