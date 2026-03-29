export async function Register({
  name,
  email,
  password,
  bio = "",
  avatar = null,
  banner = null,
  venueManager = false
}) {
  const body = {
    name,
    email,
    password,
    bio,
    venueManager
  };

  if (avatar && avatar.url) {
    body.avatar = avatar;
  }

  if (banner && banner.url) {
    body.banner = banner;
  }

  try {
    const response = await fetch("https://v2.api.noroff.dev/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": "6210f1ec-be4c-46be-93de-91c4626474fe"
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.errors?.[0]?.message || "Registration failed");
    }

    return data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
}