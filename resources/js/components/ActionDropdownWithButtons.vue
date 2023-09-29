<template>
    <div>
        <!-- Confirm Action Modal -->
        <component
            v-if="actionModalVisible"
            :show="actionModalVisible"
            class="text-left"
            :is="selectedAction?.component"
            :working="working"
            :selected-resources="selectedResources"
            :resource-name="resourceName"
            :action="selectedAction"
            :errors="errors"
            @confirm="runAction"
            @close="closeConfirmationModal"
        />

        <component
            v-if="responseModalVisible"
            :show="responseModalVisible"
            :is="actionResponseData?.modal"
            @confirm="handleResponseModalConfirm"
            @close="handleResponseModalClose"
            :data="actionResponseData"
        />

        <div class="flex flex-row gap-2">
            <ActionDropdown
                v-show="dropdownActions.length > 0 || defaultSlotHasContent"
                v-bind="$attrs"
                :actions="dropdownActions"
                :resource-name="resourceName"
                :via-resource="viaResource"
                :via-relationship="viaRelationship"
                :selected-resources="selectedResources"
                :endpoint="endpoint"
                :triggerDuskAttribute="triggerDuskAttribute"
            >
                <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
                    <slot :name="slot" v-bind="scope"/>
                </template>
            </ActionDropdown>

            <component v-for="action in buttonActions"
                       :is="action.destructive ? DangerButton : DefaultButton"
                       :key="action.uriKey"
                       :data-action-id="action.uriKey"
                       @click.stop="() => handleActionClick(action.uriKey)"
                       :title="action.name"
                       v-html="action.name">
            </component>
        </div>
    </div>
</template>

<script setup>
import {useActions} from '@/composables/useActions'
import {useStore} from 'vuex'

const store = useStore()

const emitter = defineEmits(['actionExecuted'])

import ActionDropdown from '@/components/Dropdowns/ActionDropdown';
import DefaultButton from '@/components/Buttons/DefaultButton';
import DangerButton from '@/components/Buttons/DangerButton';
import {computed, useSlots} from "vue";

const props = defineProps({
    resourceName: {},
    viaResource: {},
    viaResourceId: {},
    viaRelationship: {},
    relationshipType: {},
    actions: {type: Array, default: []},
    selectedResources: {type: [Array, String], default: () => []},
    endpoint: {type: String, default: null},
    triggerDuskAttribute: {type: String, default: null},
})

const {
    errors,
    actionModalVisible,
    responseModalVisible,
    openConfirmationModal,
    closeConfirmationModal,
    closeResponseModal,
    handleActionClick,
    selectedAction,
    working,
    executeAction,
    actionResponseData,
} = useActions(props, emitter, store)

const slots = useSlots();

const defaultSlotHasContent = computed(() => !!slots['default'] && slots['default']()[0].children.length > 0)

const dropdownActions = computed(() => props.actions.filter((action) => !action?.showAsButton))
const buttonActions = computed(() => props.actions.filter((action) => action?.showAsButton))

const runAction = () => executeAction(() => emitter('actionExecuted'))

const handleResponseModalConfirm = () => {
    closeResponseModal()
    emitter('actionExecuted')
}

const handleResponseModalClose = () => {
    closeResponseModal()
    emitter('actionExecuted')
}
</script>
