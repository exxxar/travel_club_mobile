<template>
    <!-- Share Action Sheet -->
    <div class="modal fade action-sheet inset" id="addActionSheet" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Share</h5>
                </div>
                <div class="modal-body">
                    <ul class="action-button-list">
                        <li>
                            <a href="#" class="btn btn-list" data-dismiss="modal">
                                <span>
                                    <ion-icon name="camera-outline"></ion-icon>
                                    Take a photo
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-dismiss="modal">
                                <span>
                                    <ion-icon name="videocam-outline"></ion-icon>
                                    Video
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-dismiss="modal">
                                <span>
                                    <ion-icon name="image-outline"></ion-icon>
                                    Upload from Gallery
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-dismiss="modal">
                                <span>
                                    <ion-icon name="document-outline"></ion-icon>
                                    Documents
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="btn btn-list" data-dismiss="modal">
                                <span>
                                    <ion-icon name="musical-notes-outline"></ion-icon>
                                    Sound file
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- * Share Action Sheet -->
</template>
<script>
    export default {

    }
</script>
