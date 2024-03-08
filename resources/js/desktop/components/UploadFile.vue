<template>
    <div id="file-drag-drop tc-gap-medium" style="position: relative">
        <input v-if="!dropPlace" type="file" :ref="'upload' + id"
               :id="'upload' + id" v-on:change="handleFile()" :multiple="multiple"/>
        <slot name="dropPlace" v-if="dropPlace">
            <div v-show="dragging" class="large-12 medium-12 small-12 filezone"
                 @dragend="dragging=false" @dragleave="dragging=false" @drop="handleFile()"
            >
                <input type="file" :ref="'upload' + id" :multiple="multiple"
                       :id="'upload' + id" v-on:change="handleFile()"/>
                <p>
                    Перетащите файл в область <br> или нажмите для поиска.
                </p>
            </div>
        </slot>
        <slot name="uploadButton" v-if="uploadButton">
            <base-button @dragenter="dragging=true" v-show="!dragging" @click="startUpload">
                <slot>Загрузить картинки</slot>
            </base-button>
        </slot>
        <slot name="filePlace" v-if="filePlace">
            <template v-if="upload_files && upload_files.length>0">
                <div class="tc-wrapper-column tc-gap-medium" @dragenter="dragging=true" v-show="!dragging">
                    <template v-for="(upload_file, index) in upload_files">
                        <div class="tc-card tc-row align-items-center" :key="upload_file.id">
                            <div class="col-12 col-sm-3 p-0 text-center text-sm-left">
                                <img v-if="preview" class="preview"
                                     :ref="'file_preview_'+index"
                                     style="width:100%; max-width:100px; max-height:100px; object-fit: cover;" alt=""
                                     :src="upload_file.data"
                                >
                                <base-icon v-else name="File" color="secondary" width="100%" height="100px"/>
                            </div>
                            <div class="col-12 col-sm-6 text-truncate">
                                <div class="tc-feature">
                                    <div class="tc-feature__title">Имя файла</div>
                                    <div class="tc-feature__text text-truncate">{{upload_file.name | empty_filter}}</div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-3 p-0 text-center text-sm-left">
                                <slot name="actions">
                                    <base-button v-on:click="removeFile(index)">Отменить</base-button>
                                </slot>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "UploadFile",
        props:{
            id: {
                type: String,
                default: ''
            },
            file: {

            },
            uploadButton: {
                type: Boolean,
                default: true,
                description: "Показывать ли кнопку"
            },
            dropPlace: {
                type: Boolean,
                default: false,
                description: "Показывать ли место куда можно поместить файл"
            },
            filePlace: {
                type: Boolean,
                default: false,
                description: "Показывать ли список превью файлов"
            },
            multiple: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            preview: {
                type: Boolean,
                default: false
            },
            allowed_types: {
                type: String,
                default: '\.(jpe?g|png|bmp|pdf|doc|docx|csv|xls|xlsx)$'
            },
            check: {
                type: Function,
            }
        },
        model: {
            prop: 'file',
            event: 'change'
        },
        data(){
            return {
                dragAndDropCapable: false,
                dragging:false,
                upload_files:[]
            }
        },
        methods: {
            getImagePreview(upload_file){
                if (upload_file) {
                    if ( /\.(jpe?g|png|gif|svg)$/i.test( upload_file.name ))
                    {
                        let reader = new FileReader();
                        reader.addEventListener("load", function() {
                            let index = this.upload_files.findIndex(file => file.id === upload_file.id);
                            this.$set(this.upload_files[index], 'data', reader.result);
                            if(index >= 0) {
                                if (this.$refs['file_preview_'+index]) {
                                    this.$refs['file_preview_'+index][0].src = reader.result;
                                }
                                // else {
                                //     this.$set(this.upload_files[index], 'data', reader.result);
                                // }
                            }
                        }.bind(this), false);
                        reader.readAsDataURL( upload_file );
                        reader.removeEventListener('load',function() {})
                    }
                }
            },
            startUpload() {
                this.$refs['upload' + this.id].click();
            },
            removeFile(key) {
                this.$emit('removeFile', this.upload_files[key]);
                this.upload_files.splice(key, 1);
                this.$emit('change', this.upload_files);
            },
            clear() {
                this.$refs['upload' + this.id].value = null;
                this.$emit('change', null);
            },
            handleFile() {
                // this.upload_files = [];
                let uploadedFiles = this.$refs['upload' + this.id].files;
                let types = new RegExp(this.allowed_types, "i");
                for (let i = 0; i < uploadedFiles.length; i++) {
                    if (types.test(uploadedFiles[i].name)) {
                        if(this.check) {
                            let result = this.check(uploadedFiles[i].name);
                            if(result === 'break') {
                                break;
                            }
                            if(result==='continue') {
                                continue;
                            }
                        }
                        uploadedFiles[i].id = 'id' + (new Date()).getTime();
                        uploadedFiles[i].fileType = 'file';
                        if(/\.(jpe?g|png|bmp)$/i.test(uploadedFiles[i].name))
                        {
                            uploadedFiles[i].fileType = 'image';
                            if(this.preview) {
                                this.getImagePreview(uploadedFiles[i]);
                            }
                        }
                        uploadedFiles[i].file_size = this.formatBytes(uploadedFiles[i].size);
                        this.upload_files.push(uploadedFiles[i]);
                    }
                }
                this.dragging = false;
                if(this.multiple) {
                    this.$emit('change', this.upload_files);
                }
                else {
                    this.$emit('change', this.upload_files[0]);
                }
            },
            formatBytes(bytes, decimals = 2) {
                if (bytes === 0) return '0 Bytes';

                const k = 1024;
                const dm = decimals < 0 ? 0 : decimals;
                const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

                const i = Math.floor(Math.log(bytes) / Math.log(k));

                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            }
        }
    }
</script>

<style scoped>
    .shadow {
        transition: all .15s ease;
        box-shadow: 0 0 2rem 0 rgba(136,152,170,.15)!important;
    }
    .core-card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.05);
        border-radius: .375rem;
    }
    input[type="file"]{
        opacity: 0;
        width: 100%;
        height: 1px;
        position: absolute;
        cursor: pointer;
    }
    .filezone input[type="file"]{
        opacity: 0;
        width: 100%;
        height: 200px;
        position: absolute;
        cursor: pointer;
    }
    .filezone {
        outline: 2px dashed grey;
        outline-offset: -10px;
        background: #ccc;
        color: dimgray;
        padding: 10px 10px;
        min-height: 200px;
        position: relative;
        cursor: pointer;
    }
    .filezone:hover {
        background: #c0c0c0;
    }

    .filezone p {
        font-size: 1.2em;
        text-align: center;
        padding: 50px 50px 50px 50px;
    }
    div.file-listing img{
        max-width: 90%;
    }

    div.file-listing{
        margin: auto;
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }

    div.file-listing img{
        height: 100px;
    }
    div.success-container{
        text-align: center;
        color: green;
    }

    div.remove-container{
        text-align: center;
    }

    div.remove-container a{
        color: red;
        cursor: pointer;
    }

    a.submit-button {
        display: block;
        margin: auto;
        text-align: center;
        width: 200px;
        padding: 10px;
        text-transform: uppercase;
        background-color: green;
        color: white;
        font-weight: bold;
        margin-top: 20px;
    }
    .preview {
        width:100%;
        height:100px;
        object-fit: contain;
    }
</style>
