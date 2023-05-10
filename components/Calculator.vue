<script>
import Vue from "vue";
import vSelect from "vue-select";
import "vue-slider-component/theme/default.css";
import { BCardText } from 'bootstrap-vue';
import { BFormSelect } from 'bootstrap-vue';

const pricingPrePaid = {
    cpu: 2240,
    ram: 2352,
    ssd: 157,
    ip: 1008,
    ipStep: 1120,
    snapshot: 157,
    backup: 157,
};

const pricingPostPaid = {
    cpu: 2464,
    ram: 2587,
    ssd: 173,
    ip: 1109,
    ipStep: 1232,
    snapshot: 173,
    backup: 173,
};

const basicOptions = [
    {
        value: { ram: 1, cpu: 1, ip: 1, storage: 15 },
        label: "Cloud 1",
        color: "#0052CC",
    },
    {
        value: { ram: 2, cpu: 1, ip: 1, storage: 30 },
        label: "Cloud 2",
        color: "#5243AA",
    },
    {
        value: { ram: 4, cpu: 2, ip: 1, storage: 60 },
        label: "Cloud 3",
        color: "#5243AA",
    },
    {
        value: { ram: 8, cpu: 4, ip: 1, storage: 120 },
        label: "Cloud 4",
        color: "#5243AA",
    },
    {
        value: { ram: 32, cpu: 16, ip: 1, storage: 200 },
        label: "Cloud Mega",
        color: "#5243AA",
    },
];

const generalOptions = [
    {
        value: { ram: 8, cpu: 2, ip: 1, storage: 15 },
        label: "General 1",
        color: "#00B8D9",
    },
    {
        value: { ram: 16, cpu: 4, ip: 1, storage: 30 },
        label: "General 2",
        color: "#0052CC",
    },
    {
        value: { ram: 24, cpu: 6, ip: 1, storage: 60 },
        label: "General 3",
        color: "#5243AA",
    },
    {
        value: { ram: 32, cpu: 8, ip: 1, storage: 120 },
        label: "General 4",
        color: "#5243AA",
    },
    {
        value: { ram: 48, cpu: 16, ip: 1, storage: 200 },
        label: "General 5",
        color: "#5243AA",
    },
];

const cpuOptions = [
    {
        value: { ram: 2, cpu: 2, ip: 1, storage: 15 },
        label: "Compute 1",
        color: "#00B8D9",
    },
    {
        value: { ram: 4, cpu: 4, ip: 1, storage: 30 },
        label: "Compute 2",
        color: "#0052CC",
    },
    {
        value: { ram: 8, cpu: 8, ip: 1, storage: 60 },
        label: "Compute 3",
        color: "#5243AA",
    },
    {
        value: { ram: 16, cpu: 16, ip: 1, storage: 120 },
        label: "Compute 4",
        color: "#5243AA",
    },
];

const ramOptions = [
    {
        value: { ram: 16, cpu: 2, ip: 1, storage: 15 },
        label: "Memory 1",
        color: "#00B8D9",
    },
    {
        value: { ram: 32, cpu: 4, ip: 1, storage: 30 },
        label: "Memory 2",
        color: "#0052CC",
    },
    {
        value: { ram: 64, cpu: 8, ip: 1, storage: 60 },
        label: "Memory 3",
        color: "#5243AA",
    },
    {
        value: { ram: 64, cpu: 16, ip: 1, storage: 120 },
        label: "Memory 4",
        color: "#5243AA",
    },
];

const items = [
    { id: 1, label: "Take snapshot (Everyday)" },
    { id: 2, label: "Take backup" },
];


export default {

    data() {
        return {
            value: [0, 70],
            min: 0,
            max: 100,
            height: 10,
            value_2: [0, 50],
            min_2: 0,
            max_2: 100,
            height_2: 10,
            width: 830,
            selected: null,
            selectedOption: null,
            checkedItems: [],
            inputValue: "",
            
            options: [
                { id: 1, value: 300, label: "Tariff Pre-paid" },
                { id: 2, value: 800, label: "Tariff Post-paid" },
            ],

            groupedItems: [
                {
                    label: "Checkboxes",
                    options: items
                }
            ],

            groupedOptions: [
                {
                    label: "Basic",
                    options: basicOptions
                },
                {
                    label: "General",
                    options: generalOptions
                },
                {
                    label: "Compute",
                    options: cpuOptions
                },
                {
                    label: "Memory",
                    options: ramOptions
                },
            ],

            itemsIndex: 0,
            groupedItemsIndex: 0,
            serverType: 0,
            server: 0,
            tariffType: "pricingPrePaid",
            tariffType2: "pricingPostPaid",
            diskStorage: 15,
            ips: 1,
            currentServerPrice: 4592,
            currentDiskPrice: 157,
            currentIpPrice: 1008,
            reserveSnapshot: false,
            reserveBackup: false,
            spaceInput: false,
            ipsInput: false,
        };
    },

    components: {
        vSelect,
        BFormSelect,
        'b-card-text': BCardText,
    },

    methods: {

        onChangePricingPrePaid() {
            const tariffType = "pricingPrePaid";
            this.calculateDiskPrice(tariffType, this.diskStorage, this.reserveSnapshot, this.reserveBackup);
            this.calculateServerPrice(tariffType);
            this.calculateIpPrice(tariffType, this.ips); 
        },

        onChangePricingPostPaid() {
            const tariffType2 = "pricingPostPaid";
            this.calculateDiskPrice(tariffType2, this.diskStorage, this.reserveSnapshot, this.reserveBackup);
            this.calculateServerPrice(tariffType2);
            this.calculateIpPrice(tariffType2, this.ips); 
        },

        setServerType(group) {
            this.serverType = group;
        },
        
        setServer(server) {
            this.server = server;
        },

        setCurrentServerPrice(price) {
            this.currentServerPrice = price;
        },

        setCurrentDiskPrice(price) {
            this.currentDiskPrice = price;
        },

        setCurrentIpPrice(price) {
            this.currentIpPrice = price;
        },

        // calculation of sever price

        calculateServerPrice(tariffType) {
            if(tariffType === "pricingPrePaid") {
                this.setCurrentServerPrice(this.currentServer?.value?.cpu * pricingPrePaid.cpu + this.currentServer?.value?.ram * pricingPrePaid.ram);
            } else {
                this.setCurrentServerPrice(this.currentServer?.value?.cpu * pricingPostPaid.cpu + this.currentServer?.value?.ram * pricingPostPaid.ram);
            }
        },

        // calculation of disk price

        calculateDiskPrice(tariffType, amount, reserveSnapshot, reserveBackup) {
            if (tariffType === "pricingPrePaid") {
                let preSnap = reserveSnapshot ? pricingPrePaid.snapshot : 0;
                let preBackup = reserveBackup ? pricingPrePaid.backup * amount : 0;
                this.setCurrentDiskPrice(Math.round(amount * pricingPrePaid.ssd + preSnap + preBackup));
            } else {
                let postSnap = reserveSnapshot ? pricingPostPaid.snapshot : 0;
                let postBackup = reserveBackup ? pricingPostPaid.backup * amount : 0;
                this.setCurrentDiskPrice(Math.round(amount * pricingPostPaid.ssd + postSnap + postBackup));
            }
        },

        // calculation of ip price

        calculateIpPrice(tariffType, amount) {
            if (tariffType === "pricingPrePaid") {
                let total = 1 * pricingPrePaid.ip;
                if (amount > 1) {
                    total += (amount - 1) * pricingPrePaid.ipStep;
                }
                this.setCurrentIpPrice(total);
            } else {
                let total = 1 * pricingPostPaid.ip;
                if (amount > 1) {
                    total += (amount - 1) * pricingPostPaid.ipStep;
                }
                this.setCurrentIpPrice(total);
            }   
        },

        // Storage

        setSpaceInput(value) {
            this.spaceInput = value;
            if (value) {
                this.$nextTick(() => this.$refs.spaceInputRef.focus());
            }
        },

        handleSpaceInput() {
            const value = parseFloat(this.$refs.spaceInputRef?.value);
            if (value >= 15 && value <= 1000) {
                this.diskStorage = value;
                this.calculateDiskPrice(this.tariffType, value, this.reserveSnapshot, this.reserveBackup);
            } else {
                this.$refs.spaceInputRef.value = this.diskStorage;
            }
            this.setSpaceInput(false);
        },


        onChangeStorage(event) {
            const value = parseFloat(event.target?.value);
            this.diskStorage = value;
            this.calculateDiskPrice(this.tariffType, value, this.reserveSnapshot, this.reserveBackup);
        },

        // IP address
        
        setIpsInput(value) {
            this.ipsInput = value;
            if (value) {
                this.$nextTick(() => this.$refs.ipsInputRef.focus());
            }
        },

        handleIpsInput() {
            const value = parseFloat(this.$refs.ipsInputRef?.value);
            if (value >= 1 && value <= 3) {
                this.ips = value;
                this.calculateIpPrice(this.tariffType, value);
            } else {
                this.$refs.ipsInputRef.value = this.ips;
            }
            this.setIpsInput(false);
        },

        onChangeIp(event) {
            const value = parseFloat(event.target?.value);
            this.ips = value;
            this.calculateIpPrice(this.tariffType, value);
        },

        formatLabel() {
            this.option.options;
        },

        // Checkboxes

            // Snapshot

            onChangeSnapshot() {
                this.calculateDiskPrice(this.tariffType, this.diskStorage, !this.reserveSnapshot, this.reserveBackup); 
                this.reserveSnapshot = !this.reserveSnapshot;            
            },

            // Backup

            onChangeBackup() {
                this.calculateDiskPrice(this.tariffType, this.diskStorage, this.reserveSnapshot, !this.reserveBackup);
                this.reserveBackup = !this.reserveBackup;
            },

        // format MNT currency

        formatToCurrency(value) {
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        },
      
        moneyFormatTugrug(value) {
            return `${this.formatToCurrency(Math.ceil(value))}₸`;
        },
    },

    mounted(){
        this.setCurrentServerPrice(this.currentServerPrice)
        this.setCurrentDiskPrice(this.currentDiskPrice)
        this.setCurrentIpPrice(this.currentIpPrice)
    },

    computed: {

        currentDiskPrice() {
            return (this.tariffType === "pricingPrePaid" ? pricingPrePaid.ssd : pricingPostPaid.ssd) * this.diskStorage;
        },

        currentIpPrice() {
            return this.ips;
        },

        currentServer() {
            return this.groupedOptions[this.serverType].options[this.server];
        }

    },
};
</script>

<template>
    <main>
        <div class="title-main">
            <h2 class="text-center">{{ $t("Choose what's right for you") }}</h2>
        </div>

        <div class="container-row container-center">
            <div class="leftcard">
                <div class="title-leftcard">
                    <h4>{{ $t("Cloud Virtual Server") }}</h4>
                </div>

                <div class="container-row space flex">
                    <div v-for="(group, i) in groupedOptions" v-bind:key="i">
                        <button
                            v-bind:class="[serverType === i ? 'btn selected' : 'btn btn-primary']" 
                            v-on:click="setServerType(i)">
                                {{ group.label }}
                        </button>
                    </div>
                </div>

                <div class="container-row space flex">
                    <button 
                        v-for="(type, i) in groupedOptions[serverType].options"
                        v-bind:key="type.label"
                        v-bind:class="[server === i ? 'btn selected' : 'btn btn-primary']" 
                        v-on:click="setServer(i)">
                            {{ type.label }}
                    </button>
                </div>


                <div class="center" v-bind:style="{ color: 'green', fontSize: '22px',  fontWeight: 'bold' }">
                    <b-card-text>{{ this.currentServer?.value?.cpu }} {{ $t("VCPU") }}</b-card-text>
                    <b-card-text>{{ this.currentServer?.value?.ram }} {{ $t("GB RAM") }}</b-card-text>
                </div>


                <div class="container-row">
                    <div class="storage" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                        <b-card-text> {{ $t("Storage") }}</b-card-text>
                    </div>

                    <div class="inputvalue">
                        <div v-bind:style="{  color: '#4e4b4b', fontSize: '18px'}">
                            <template v-if="!spaceInput">
                                <span
                                    aria-hidden
                                    @click="setSpaceInput(true)"
                                    class="border bg-white text-black text-sm font-medium py-1 px-2.5 rounded hover:cursor-pointer">
                                    {{ diskStorage }}
                                </span>
                            </template>
                            <template v-else>
                                <input
                                    type="number"
                                    :value="diskStorage"
                                    ref="spaceInputRef"
                                    class="text-right text-sm border bg-white text-black font-medium py-1 px-2.5 rounded max-w-min focus:outline-none"
                                    @keydown.enter="handleSpaceInput()"
                                    @blur="handleSpaceInput()"
                                    :min="15"
                                    :max="1000"  
                                />
                            </template>
                                {{ $t("GB") }}
                        </div>
                    </div>
                </div>

                <div class="firstslider">
                    <input
                        type="range"
                        :value="diskStorage"
                        @change="onChangeStorage"
                        :step="5"
                        :min="15"
                        :max="1000"
                        class="rangewidth"
                    />
                </div>

                <div class="container-row">
                    <div class="ipaddress" v-bind:style="{  color: '#4e4b4b', fontSize: '18px'}">
                        <b-card-text>{{ $t("IP address") }}</b-card-text>
                    </div>

                    <div class="inputvalueip">
                        <div v-bind:style="{  color: '#4e4b4b', fontSize: '18px'}">
                            <template v-if="!ipsInput">
                                <span 
                                    aria-hidden
                                    @click="setIpsInput(true)"
                                    class="border bg-white text-black text-sm font-medium py-1 px-2.5 rounded hover:cursor-pointer">
                                    {{ ips }}
                                </span>
                            </template>
                            <template v-else>
                                <input 
                                    type="number"
                                    :value="ips"
                                    ref="ipsInputRef"
                                    class="text-right text-sm border bg-white text-black font-medium py-1 px-2.5 rounded max-w-min focus:outline-none"
                                    @keydown.enter="handleIpsInput()"
                                    @blur="handleIpsInput()"
                                    :min="1"
                                    :max="3"
                                />
                            </template>
                                {{ $t("Quantity") }}
                        </div>
                    </div>
                </div>

                <div class="secondslider">
                    <input 
                        type="range"
                        :value="ips"
                        @input="onChangeIp"
                        :step="1"
                        :min="1"
                        :max="3"
                        class="rangewidth" 
                    />
                </div>

                <div class="edit-text2" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                    <b-card-text>{{ $t("First ip address price is 1,008₸. Additional ip addresses cost 1,120₸.") }}</b-card-text>
                </div>

                <div class="container-row space-p center">       
                    <button class="btn -primary text-gray-400"                
                        v-on:click="onChangePricingPrePaid()">
                        {{ $t("Tariff Pre-paid") }}
                    </button>
                
                    <button class="btn -primary text-gray-400"
                        v-on:click="onChangePricingPostPaid()">
                        {{ $t("Tariff Post-paid") }}
                    </button>
                </div>

                <!-- Checkboxes -->

                    <!-- Snapshot -->

                <div class="snapshot" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                    <input
                        type="checkbox"
                        :checked="reserveSnapshot"
                        :value="groupedItems[0].options[0].id"
                        v-model="checkedItems"
                        @change="onChangeSnapshot()"
                    />
                    <div class="space-temp">
                        <label>{{ groupedItems[0].options[0].label }}</label>
                    </div>
                </div>

                    <!-- Backup -->

                <div class="backup" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                    <input 
                        type="checkbox"
                        :checked="reserveBackup"
                        :value="groupedItems[0].options[1].id"
                        v-model="checkedItems" 
                        @change="onChangeBackup()" 
                    />
                    <div class="space-temp">
                        <label>{{ groupedItems[0].options[1].label }}</label>
                    </div>
                </div>

            </div>

            <div class="rigthcard">
                <div class="title-rightcard">
                    <h4>{{ $t("Price information") }}</h4>
                </div>

                <div class="container-column center" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                    <b-card-text>{{ $t("Server price") }} </b-card-text>
                </div>

                <div class="container-column center" v-bind:style="{ fontSize: '33px',  fontWeight: 'bold' }">
                    <b-card-text>{{ moneyFormatTugrug(this.currentServerPrice) }}</b-card-text>
                </div>

                <div class="container-column center" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                    <b-card-text>{{ $t("Disk price / monthly") }} </b-card-text>
                </div>

                <div class="container-column center" v-bind:style="{ fontSize: '33px', fontWeight: 'bold' }">
                    <b-card-text>{{ moneyFormatTugrug(this.currentDiskPrice) }}</b-card-text>
                </div>

                <div class="container-column center" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                    <b-card-text>{{ $t(" IP price / monthly") }}</b-card-text>
                </div>

                <div class="container-column center" v-bind:style="{ fontSize: '33px',  fontWeight: 'bold' }">
                    <b-card-text>{{ moneyFormatTugrug(this.currentIpPrice) }}</b-card-text>
                </div>

                <div class="container-column center" v-bind:style="{ color: '#4e4b4b', fontSize: '18px' }">
                    <b-card-text>{{ $t("Total cost / monthly (Vat not included)") }} </b-card-text>
                </div>

                <div class="container-column center" v-bind:style="{ color: 'green', fontSize: '33px', fontWeight: 'bold' }">
                    <b-card-text>{{ moneyFormatTugrug(this.currentServerPrice + this.currentDiskPrice + this.currentIpPrice) }}</b-card-text>
                </div>

                <div class="container-column center edit-text" v-bind:style="{ color: '#4e4b4b', fontSize : '18px'}">
                    <b-card-text>
                        {{ $t(" *Actual price might fluctuate due to different number of days in a month ") }}
                    </b-card-text>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">

.bg-secondary {
    background-color: #6b7280;
}

.text-gray-900 {
    color: #1f2937;
}

.text-gray-400 {
    color:#128b07;
    border: 4px solid #128b07;
}

.rangewidth {
    width: 93%;
}

.flex {
    display: flex;
}

.colorbutton {
    /* color: #1C984F; */
    border: 1px solid #4e4b4b;
}

.border {
    border: 4px solid #000000;
}

.title {
    &-main {
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-leftcard {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &-rightcard {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.leftcard {
    border: 1px solid #4e4b4b;
    border-radius: 12px;
    border-color:#ccc;
    /* background-color:#ffffff ; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
    padding-top: 15px;
    height: 740px;
    width: 900px;
}

.rigthcard {
    border: 1px solid #ccc;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 50px;
    padding-top: 15px;
    margin-left: 100px;
    height: 740px;
    width: 550px;
}

.red {
    background-color: red;
}

.white {
    background-color: white;
}

.container {
    &-row {
        display: flex;
        flex-wrap: wrap;
    }

    &-column {
        display: flex;
        flex-direction: column;
    }

    &-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.space {
    margin-top: 20px;
    justify-content: space-between;
    margin-left: 35px;
    margin-right: 35px;

    &-temp {
        padding-left: 10px;
    }

    &-p {
        padding-top: 15px;
    }
}

.center {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 30px;
}

.snapshot {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
}

.backup {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
}

.firstslider {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}

.secondslider {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
}

.description {
    margin-top: 20px;
    margin-left: 10px;
}

.edit {
    &-text {
        margin-right: 30px;
        margin-left: 30px;
    }

    &-text2 {
        margin-left: 30px;
    }
}

.vue-select {
    min-width: 100px;
}

.narrow-input {
    width: 50px;

    &-temp {
        width: 30px;
    }
}

.storage {
    margin-top: 20px;
    margin-left: 32px;
}

.ipaddress {
    margin-top: 30px;
    margin-left: 32px;
}

.inputvalue {
    position: relative;
    top: 20px;
    left: 650px;
}

.inputvalueip {
    position: relative;
    top: 30px;
    left: 610px;
}

.quantity {
    position: relative;
    top: 20px;
    left: 630px;
}

.selected {
    background: green !important;
    color: black !important
}
</style>