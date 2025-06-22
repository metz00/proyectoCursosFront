import axios from "axios";
import alerts from "@/shared/alerts";
import { useAppStore } from "@/store/app";

export const get = async () => {
  try {
    const { data } = await axios.get(`${useAppStore().$state.apiURL}/users`);
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
export const create = async (payload) => {
  try {
    const { data } = await axios.post(
      `${useAppStore().$state.apiURL}/users`,
      payload
    );
    if (data.error) throw new Error(data.message);
    alerts.showSuccess("Usuario creado correctamente");
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
      `${useAppStore().$state.apiURL}/users/${id}`,
      payload
    );
    if (data.error) throw new Error(data.message);
    alerts.showSuccess("Usuario actualizado correctamente");
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
    const confrim = await alerts.showConfirm(
      "¿Seguro que desea eliminar a este usuario?"
    );
    if (!confirm) return;
    const { data } = await axios.delete(
      `${useAppStore().$state.apiURL}/users/${id}`
    );
    if (data.error) throw new Error(data.message);
    alerts.showSuccess("Usuario eliminado correctamente");
    return data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Ocurrió un error inesperado";
    alert.showError(message);
  }
};
