import axios from "axios";
import { useAppStore } from "@/store/app";
import Swal from "sweetalert2";

export const mixin = {
  methods: {
    async peticionApi({ api, data = null, headers = {}, method }) {
      const appStore = useAppStore();

      const token = localStorage.getItem("token");
      if (token && !axios.defaults.headers.common["Authorization"]) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      if (token && !headers["Authorization"]) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      try {
        const response = await axios({
          method,
          url: `${appStore.apiURL}/${api}`,
          data,
          headers,
        });

        const resData = response.data;
        console.log("resData: ", resData);
        
        if (resData.data && resData.data.token && resData.data.user) {
          localStorage.setItem("token", resData.data.token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${resData.data.token}`;
        } else if (resData.token && resData.user) {
          localStorage.setItem("token", resData.token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${resData.token}`;
        }
        return resData;
      } catch (error) {
        if (error.response) {
        } else {
          this.error = "Error de conexión con el servidor";
        }
        throw error;
      }
    },
  
  },
};
