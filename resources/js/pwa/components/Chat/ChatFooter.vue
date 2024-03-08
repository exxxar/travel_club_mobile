<template>
    <!-- chat footer -->
    <div class="chatFooter">
        <form>
            <a href="javascript:;" class="btn btn-icon btn-secondary rounded" data-bs-toggle="modal" data-bs-target="#addActionSheet">
                <ion-icon name="add"></ion-icon>
            </a>
            <div class="form-group boxed">
                <div class="input-wrapper">
                    <input type="text" class="form-control" placeholder="Type a message...">
                    <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                    </i>
                </div>
            </div>
            <button type="button" class="btn btn-icon btn-primary rounded">
                <ion-icon name="send"></ion-icon>
            </button>
        </form>
    </div>
    <!-- * chat footer -->
</template>
<script>
    export default {

    }
</script>
