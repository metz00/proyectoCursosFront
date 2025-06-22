import axios from "axios";
import { useAppStore } from "@/store/app";
import alerts from "@/shared/alerts";

export const get = async (page = 1, limit = 100) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(
      `${useAppStore().$state.apiURL}/courses?page=${page}&limit=${limit}`,
      {
        headers: { ["Authorization"]: `Bearer ${token}` },
      }
    );
    if (data.error) throw new Error(data.message);
    return data;
  } catch (error) {
    const message = error.message || "Ocurrió un error inesperado";
    alerts.showError(message);
    return { data: [], pagination: { totalPages: 1, totalItems: 0 } };
  }
};
export const create = async (payload) => {
  try {
    const formData = new FormData();
    formData.append("categoryId", payload.categoryId);
    formData.append("course", payload.course);
    formData.append("description", payload.description);
    formData.append("active", payload.active);
    if (payload.image) {
      formData.append("image", payload.image);
    }
    const { data } = await axios.post(
      `${useAppStore().$state.apiURL}/courses`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (data.error) throw new Error(data.message);
    alerts.showSuccess("Curso agregado correctamente");
    return data;
  } catch (error) {
    const message = error.message || "Ocurrio un error inesperado";
    alerts.showError(message);
  }
};

export const update = async (id, payload) => {
  try {
    const formData = new FormData();
    formData.append("categoryId", payload.categoryId);
    formData.append("course", payload.course);
    formData.append("description", payload.description);
    formData.append("active", payload.active);
    if (payload.image) {
      formData.append("image", payload.image);
    }
    const { data } = await axios.put(
      `${useAppStore().$state.apiURL}/courses/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (data.error) throw new Error(data.message);
    alerts.showSuccess("Curso actualizado correctamente");
    return data;
  } catch (error) {
    const message = error.message || "Ocurrio un error inesperado";
    alerts.showError(message);
  }
};

export const remove = async (id) => {
  try {
    const confirm = await alerts.showConfirm(
      "¿Seguro que desea eliminar este curso?"
    );
    if (!confirm) return;
    const { data } = await axios.delete(
      `${useAppStore().$state.apiURL}/courses/${id}`
    );
    if (data.error) throw new Error(data.message);
    alerts.showSuccess("Curso eliminado correctamente");
    return data;
  } catch (error) {
    const message = error.message || "Ocurrio un error inesperado";
    alerts.showError(message);
  }
};
