export async function updateAvatar({ name, avatar, token }) {
  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/holidaze/profiles/${name}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Noroff-API-Key": "6210f1ec-be4c-46be-93de-91c4626474fe",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          avatar,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || "Avatar update failed");
    }

    return data.data;
  } catch (error) {
    console.error("Update avatar error:", error);
    throw error;
  }
}
