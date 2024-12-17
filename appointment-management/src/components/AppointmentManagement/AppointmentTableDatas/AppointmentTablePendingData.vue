<template>
<div class="max-sm:overflow-x-auto">
    <table class="w-full text-gray-500 text-base table-auto">
        <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-[Inter]">
            <tr>
                <th class="px-6 py-3">Reference No.</th>
                <th class="px-6 py-3">Doctor Name</th>
                <th class="px-6 py-3">Scheduled Date</th>
                <th class="px-6 py-3">Slot No.</th>
                <th class="px-6 py-3">Amount</th>
                <th class="px-6 py-3">Status</th>
                <th class="px-6 py-3">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="request in requests" :key="request.referenceNo" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td class="px-6 py-3">{{ request.referenceNo }}</td>
                <td class="px-6 py-3">{{ request.doctorName }}</td>
                <td class="px-6 py-3">{{ request.scheduledDate }}</td>
                <td class="px-6 py-3">{{ request.slotNo }}</td>
                <td class="px-6 py-3">{{ request.amount }}</td>
                <td class="px-6 py-3">{{ request.status }}</td>
                <td class="px-6 py-3">{{ request.action }}</td>
            </tr>
        </tbody>

    </table>

</div>
</template>

<script>
    export default {
        name: "PendingTable",
        props: {
            requests: {
                type: Array,
                required: true
            }
        }
    }
</script>