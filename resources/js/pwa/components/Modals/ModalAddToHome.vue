<template>
    <div class="modal inset fade action-sheet android-add-to-home show" id="android-add-to-home-screen" tabindex="-1" role="dialog" aria-modal="true" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Установить на телефон</h5>
                    <a href="javascript:;" class="close-button" data-dismiss="modal">
                        <a href="javascript:;" data-dismiss="modal">Закрыть</a>
                    </a>
                </div>
                <div class="modal-body">
                    <div class="action-sheet-content text-center">
                        <div class="mb-1"><img v-lazy="'/img/travel/logo-1.png'" alt="image" class="imaged">
                        </div>
                        <h4>Travel Club</h4>
                        <div>
                            Установка Андройд приложения
                        </div>
                        <div>
                            Нажмите <i class="fas fa-ellipsis-v"></i> и добавьте на рабочий экран
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
