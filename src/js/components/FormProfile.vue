<script>
import DATA from '../data';
import FormSelect from "./FormSelect";

export default {
    extends: FormSelect,

    mounted() {
        this.options = DATA.H264_PROFILES;
    }
}
</script>