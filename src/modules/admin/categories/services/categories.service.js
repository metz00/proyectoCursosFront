import axios from "axios";
import { useAppStore } from "@/store/app";
import alert from "@/shared/alerts";

export const get = async (page = 1, limit = 10) => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(
      `${useAppStore().$state.apiURL}/categories?page=${page}&limit=${limit}`,
      {
        headers: { ["Authorization"]: `Bearer ${token}` },
      }
    );
    if (data.error) throw new Error(data.message);
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Ocurrió un error inesperado";
    alert.showError(message);
  }
};

export const update = async (id, payload) => {
  try {
    const { data } = await axios.put(
      `${useAppStore().$state.apiURL}/categories/${id}`,
      payload
    );
    if (data.error) throw new Error(data.message);
    alert.showSuccess("Categoria actualizada correctamente");
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Ocurrió un error inesperado";
    alert.showError(message);
  }
};
export const remove = async (id) => {
  try {
    const confirm = await alert.showConfirm(
      "¿Seguro que deseas eliminar esta categoría?"
    );
    if (!confirm) return;
    const { data } = await axios.delete(
      `${useAppStore().$state.apiURL}/categories/${id}`
    );
    if (data.error) throw new Error(data.message);
    alert.showSuccess("Categoría eliminada correctamente");
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Ocurrió un error inesperado";
    alert.showError(message);
  }
};
export const create = async (payload) => {
  try {
    const { data } = await axios.post(
      `${useAppStore().$state.apiURL}/categories`,
      payload
    );
    if (data.error) throw new Error(data.message);
    alert.showSuccess("Categoria creada correctamente");
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Ocurrió un error inesperado";
    alert.showError(message);
  }
};
